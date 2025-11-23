#!/bin/sh
set -e

# Export environment variables to make them available to envsubst
export VITE_API_URL="${VITE_API_URL:-http://localhost:5000}"
export MODE="${MODE:-production}"

# Replace placeholders in env.template.js with actual environment variables
# Explicitly list variables to substitute
envsubst '$VITE_API_URL $MODE' < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js

# Inject env.js script tag into index.html before the main script
# This ensures window._env_ is available before the app loads
if ! grep -q '<script src="/env.js"></script>' /usr/share/nginx/html/index.html; then
  # Use a temporary file to inject the script tag
  cat > /tmp/inject_env.js << 'EOF'
    <script src="/env.js"></script>
EOF
  # Insert the script tag before the main script
  sed -i '/<script type="module" src="\/src\/main.tsx"><\/script>/r /tmp/inject_env.js' /usr/share/nginx/html/index.html
  rm -f /tmp/inject_env.js
fi

# Start Nginx
exec nginx -g 'daemon off;'
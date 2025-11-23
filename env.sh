#!/bin/sh
set -e

# Export environment variables to make them available to envsubst
export VITE_API_URL="${VITE_API_URL:-http://localhost:5000}"
export MODE="${MODE:-production}"

# Replace placeholders in env.template.js with actual environment variables
# Explicitly list variables to substitute
envsubst '$VITE_API_URL $MODE' < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js

# Start Nginx
exec nginx -g 'daemon off;'
#!/usr/bin/env bash
set -e

IP=$(hostname -I | awk '{print $1}')
PORT=1111

echo "Starting local server..."
echo ""
echo "Open on your phone: http://$IP:$PORT"
echo ""

./zola serve --interface 0.0.0.0 --port "$PORT" --base-url "http://$IP"

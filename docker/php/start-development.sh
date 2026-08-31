#!/bin/sh

set -eu

git config --global --add safe.directory /var/www/html

composer install --no-interaction --prefer-dist --no-progress
npm ci --no-audit --no-fund
php artisan migrate --force

php artisan serve --host=0.0.0.0 --port=8000 &
laravel_pid=$!

npm run dev -- --port 5173 &
vite_pid=$!

trap 'kill "$laravel_pid" "$vite_pid" 2>/dev/null || true' INT TERM EXIT

while kill -0 "$laravel_pid" 2>/dev/null && kill -0 "$vite_pid" 2>/dev/null; do
    sleep 1
done

exit 1

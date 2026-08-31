FROM php:8.4-cli

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    unzip \
    curl \
    ca-certificates \
    gnupg \
    libpq-dev \
    libzip-dev \
    libicu-dev \
    libonig-dev \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && docker-php-ext-install \
    pdo_pgsql \
    mbstring \
    bcmath \
    intl \
    zip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY docker/php/start-development.sh /usr/local/bin/start-development

RUN chmod +x /usr/local/bin/start-development

WORKDIR /var/www/html

EXPOSE 8000 5173

CMD ["/usr/local/bin/start-development"]

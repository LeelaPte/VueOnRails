FROM node:20.17.0-alpine3.20 AS node
FROM ruby:3.3.5-alpine3.20

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

ENV BUNDLER_VERSION=2.5.20
ENV RAILS_ENV=development

RUN apk add --update --no-cache \
  binutils-gold \
  build-base \
  curl \
  py-pip \
  file \
  g++ \
  gcc \
  gcompat \
  git \
  less \
  libstdc++ \
  libffi-dev \
  libc-dev \
  linux-headers \
  libxml2-dev \
  libxslt-dev \
  libgcrypt-dev \
  make \
  netcat-openbsd \
  openssl \
  pkgconfig \
  postgresql-dev \
  tzdata \
  yarn

WORKDIR /app

COPY Gemfile Gemfile.lock ./
COPY package.json yarn.lock ./

RUN gem install bundler -v ${BUNDLER_VERSION}
RUN bundle config build.nokogiri --use-system-libraries
RUN bundle lock --add-platform x86_64-linux
RUN bundle config force_ruby_platform true
RUN bundle install

RUN yarn install --development

COPY . ./

EXPOSE 3000 3035

CMD ["sh", "-c", "bin/webpack-dev-server --host 0.0.0.0 --watch-poll & bin/rails server -b 0.0.0.0"]

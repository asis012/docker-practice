FROM mysql:latest


ENV MYSQL_DATABASE user
ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_USER asis
ENV MYSQL_PASSWORD asis012
ENV DATABASE_HOST database

EXPOSE 3306

COPY scripts.sql /docker-entrypoint-initdb.d/
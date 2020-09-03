FROM oracle/graalvm-ce:20.2.0-java11 as graalvm
RUN gu install native-image

COPY . /home/app/myapp
WORKDIR /home/app/myapp



RUN native-image -cp build/libs/*-all.jar


FROM frolvlad/alpine-glibc
RUN apk update && apk add libstdc++
EXPOSE 8080
COPY --from=graalvm /home/app/myapp/mhip-2 /app/mhip-2
ENTRYPOINT ["/app/mhip-2"]

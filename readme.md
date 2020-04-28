## Using Puppeteer with a remote dockerized Chrome

This project serves as a minimal example of how you can use puppeteer, with chrome running from a separate Docker container.

The advantage is rather than adding Chrome into your own docker image, you can just use a pre-built one. Also, you can use puppeteer-core which installs puppeteer without a chromium binary.

## To run

```
docker-compose up --build
```

This will grab a screenshot of github and place it inside a screenshots directory.
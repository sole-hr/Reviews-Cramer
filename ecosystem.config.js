module.exports = {
  apps: [
    {
      name: "customer-reviews",
      script: "./server/index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-16-213-178.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/FIKE.pem",
      ref: "origin/master",
      repo: "https://github.com/nike-hratx41-fec/customer-reviews",
      path: "/home/ubuntu/customer-reviews",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};


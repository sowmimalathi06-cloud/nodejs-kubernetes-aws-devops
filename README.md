# Node.js Kubernetes AWS DevOps Project

## Project Overview

This project demonstrates the deployment of a containerized Node.js application on Kubernetes using K3s running on an AWS EC2 instance.

The application is packaged using Docker and deployed using Kubernetes Deployment, ReplicaSet and NodePort Service.

## Architecture

```text
Developer
    |
    v
Node.js Application
    |
    v
Docker Image
    |
    v
K3s / Kubernetes
    |
    v
Deployment
    |
    v
ReplicaSet
    |
    +----------------+
    |                |
    v                v
  Pod 1            Pod 2
    |                |
    +-------+--------+
            |
            v
      NodePort Service
          Port 30080
            |
            v
      AWS EC2 Instance
            |
            v
       Public DNS
            |
            v
       Web Application

---
slug: "/posts/docker/install-docker-on-macos"
date: "2020-12-21"
title: "Macos Docker安装"
path: "/posts/docker/install-docker-on-macos"
tags: docker
---

## brew安装docker

``` shell
#搜索
==> Formulae
docker                          docker-credential-helper        docker-machine-completion       docker-machine-nfs              docker2aci
docker-clean                    docker-credential-helper-ecr    docker-machine-driver-hyperkit  docker-machine-parallels        dockerize
docker-completion               docker-gen                      docker-machine-driver-vmware    docker-slim                     lazydocker
docker-compose                  docker-ls                       docker-machine-driver-vultr     docker-squash
docker-compose-completion       docker-machine                  docker-machine-driver-xhyve     docker-swarm
==> Casks
docker

#安装
brew install docker                                                                                                          
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/bottles/docker-19.03.14.big_sur.bottle.tar.gz
######################################################################## 100.0%
==> Pouring docker-19.03.14.big_sur.bottle.tar.gz
==> Caveats
zsh completions have been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
🍺  /usr/local/Cellar/docker/19.03.14: 14 files, 71.6MB
```

## 手动安装

下载[Stable](https://download.docker.com/mac/stable/Docker.dmg)，双击安装

![PVr5uh](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/PVr5uh.jpg)

安装完成后，通过命令检查Docker版本

``` shell
docker --version

Docker version 19.03.14, build 5eb3275
```

## 镜像加速

![NAWFnd](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/NAWFnd.png)

## 更多

- [x] [Docker images](./Docker%20images)
- [x] [Docker Containers](./Docker%20Containers)
- [x] [Dockerfiles](./Dockerfiles)
- [ ] [Updating a deployed container based on a Docker image]()
- [ ] [How to commit changes to a Docker image]()
- [ ] [How to access files outside a Docker image]()
- [ ] [Sharing Docker Images on Docker Hub]()
- [ ] [Working with Docker Images from the command line]()
- [ ] [Working with Docker Containers from the command line]()
- [ ] [What to do if a Docker container immediately exits]()
- [ ] [Create a simple Node.js Hello World Docker Container from scratch]()
- [ ] [Using Docker Desktop to manage a Container]()
- [ ] [First steps with Docker after the installation]()
- [ ] [Mac os Docker安装](./Macos%20%20Docker安装)
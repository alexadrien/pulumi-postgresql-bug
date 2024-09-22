# `pulumi-postgresql` Bug

Dependencies :
- `pulumi` (mine is 3.133.0)

Steps to reproduce : 
```shell
git clone git@github.com:alexadrien/pulumi-postgresql-bug.git
cd pulumi-postgresql-bug
pulumi install
pulumi up # Answer yes to questions
```

Clean up after test : 
```shell
pulumi down --yes
pulumi stack rm dev
cd ../ && rm -rf pulumi-postgresql-bug
```

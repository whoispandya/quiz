# Data validation and Reporting

## Getting Started

Steps
### Prerequisites

What things you need to install the software and how to install them

* [NodeJS](https://nodejs.org/en/) 

### Installing

```
npm install
```

## Running script

```
node solution.js > results.txt
```

## Notes

Code Index

1 = > address check

2 = > name check 

3 = > email check 

4 = > driver licence num without XXX 

5 = > dob 

6 = > gender 

7 = > Phone 

Supply input as checks which need to be passed 

for eg. if only gender and phone check required => supply input variable as "67"

=> policies.json contains the current information supplied which will be validated by script

note =: if you see multiple entry for eg "missing exact birthday, only range given" => this means that a policy has more then 1 members(spouce, kid, etc..) and they are also missing birthday info..

## results.txt

This file will store all the discrapencies and can be forwarded to support dept for processing



[![Build Status](https://travis-ci.org/cfn-modules/alb.svg?branch=master)](https://travis-ci.org/cfn-modules/alb)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/alb.svg)](https://www.npmjs.com/package/@cfn-modules/alb)

# cfn-modules: ALB

Application load balancer.

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/alb
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Alb:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        VpcModule: !GetAtt 'Vpc.Outputs.StackName' # required
        AlertingModule: '' # optional
        BucketModule: '' # optional
        Scheme: 'internet-facing' # optional
        IdleTimeoutInSeconds: '60' # optional
      TemplateURL: './node_modules/@cfn-modules/alb/module.yml'
```

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VpcModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/vpc">vpc module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>BucketModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/s3-bucket">S3 bucket module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>Scheme</td>
      <td>Indicates whether the load balancer reachable from the public Internet or only from within the VPC</td>
      <td>internet-facing</td>
      <td>no</td>
      <td>[internet-facing, internal]</td>
    </tr>
    <tr>
      <td>IdleTimeoutInSeconds</td>
      <td>The idle timeout value, in seconds</td>
      <td>60</td>
      <td>no</td>
      <td>1-4000</td>
    </tr>
  </tbody>
</table>

#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ServerSideStack } from '../lib/server_side-stack';

const app = new cdk.App();
new ServerSideStack(app, 'ServerSideStack');

const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('defaults', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/defaults.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('ipv4', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/ipv4.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('access-log', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/access-log.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    // what could we test here?
    await cfntest.emptyBucket(outputs.AccessLogBucketName);
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

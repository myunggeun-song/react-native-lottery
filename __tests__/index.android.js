import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('getNumber', () => {
  const lotteryNumbers = new Index();
  const num = lotteryNumbers.getNumber();
  expect(num).toBeGreaterThan(0);
  expect(num).toBeLessThan(50);
});

it('generateNumbers', () => {
  const lotteryNumbers = new Index();
  const nums = lotteryNumbers.generateNumbers().split('  ');
  var set = new Set();

  expect(nums.length).toBe(6);

  for (var i = 0; i < 6; i++) {
    expect(Number(nums[i])).toBeGreaterThan(0);
    expect(Number(nums[i])).toBeLessThan(50);
    expect(set.has(nums[i])).toBeFalsy();
    set.add(nums[i]);
  }
});


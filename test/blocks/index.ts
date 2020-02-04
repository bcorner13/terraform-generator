import { Resource, Argument, Attribute, Map, Heredoc } from '../../src';

export const resource = new Resource('type', 'name', { test: true });

export const attr = new Attribute(resource, 'attr');

export const arg1 = {
  arg0: 'a',
  arg1: ['b', 'c', 'd'],
  arg2: 0,
  arg3: [1, 2, 3],
  arg4: true,
  arg5: [false, true, false],
  arg6: attr,
  arg7: [attr, attr, attr],
  arg8: resource,
  arg9: [resource, resource, resource],
  arg10: ['e', 4, true, attr, resource],
  arg11: new Argument('max(5, 12, 9)'),
  arg12: new Argument('max(5, ', attr, ', 9)'),
  arg13: new Heredoc('heredoc')
};

export const arg2 = {
  ...arg1,
  arg14: arg1
};

export const arg3 = {
  ...arg2,
  arg15: [arg2, arg2, arg2]
};

export const arg4 = {
  ...arg3,
  arg16: new Map(arg3)
};

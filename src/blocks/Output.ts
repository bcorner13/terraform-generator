import TerraformGenerator, { Block, Argument, Attribute } from '../..';

export default class Output extends Block {

  readonly name: string;

  constructor(tfGenerator: TerraformGenerator, name: string, args: object) {
    super(tfGenerator, 'output', [name], args);

    this.name = name;
  }

  asArgument(): Argument {
    throw new Error('Inaccessible function.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAttribute(name: string): Attribute {
    throw new Error('Inaccessible function.');
  }

}

import * as f from 'f'

class ClassName {
  static create (props) {
    return new ClassName(f.join(f.flatten(f.concat([], props.className)), ' '))
  }
}

export default ClassName

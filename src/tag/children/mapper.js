import * as f from 'f'
import Text from '@/text'

export default (children, parent) =>
  f.map(children, (textOrTag) =>
    Text.is(textOrTag) ? Text.create(textOrTag, parent) : textOrTag.setParent(parent))

import * as f from 'f'
import Text from '@/text'

export default (children) =>
  f.map(children, (textOrTag) =>
    Text.is(textOrTag) ? Text.create(textOrTag) : textOrTag)

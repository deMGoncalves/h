import * as f from 'f'
import fragment from '@/fragment'
import parser from './parser'

export default (props, children) =>
  fragment(props, f.flatten(parser(children)))

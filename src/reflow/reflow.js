import * as f from 'f'
import changeText from './changeText'
import differentNode from './differentNode'
import differentText from './differentText'
import equalNode from './equalNode'
import equalText from './equalText'
import replace from './replace'
import restrict from './restrict'
import stub from './stub'

const reflow = (node, vNode) => (
  console.log(node, vNode),

  f.cond(
    [equalText, stub],
    [differentText, changeText],
    [equalNode, restrict],
    [differentNode, replace]
  )(node, vNode)
)

export default reflow

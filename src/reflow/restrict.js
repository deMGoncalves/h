import * as f from 'f'
import attributeKeyAdded from './attributeKeyAdded'
import attributeKeyRemoved from './attributeKeyRemoved'
import changeAttributeValue from './changeAttributeValue'
import differentAttributeValue from './differentAttributeValue'
import differentAttributeKey from './differentAttributeKey'
import equalAttributeValue from './equalAttributeValue'
import reflow from './reflow'
import removeAttribute from './removeAttribute'
import restrictAttribute from './restrictAttribute'
import setAttribute from './setAttribute'
import stub from './stub'

export default (node, vNode) => (
  f.forEach(
    f.zip(node.attributes, vNode.attributes),
    f.cond(
      [equalAttributeValue, stub],
      [differentAttributeValue, changeAttributeValue(node)],
      [differentAttributeKey, restrictAttribute],
      [attributeKeyAdded, setAttribute(node)],
      [attributeKeyRemoved, removeAttribute]
    )
  ),

  /*
  f.forEach(
    f.zip(node.events, vNode.events),
    f.cond(
      [equalEventListener, f.always()],
      [differentEventListener, changeEventListener],
      [differentEventName, restricEvent],
      [eventListenerAdded, addEvent],
      [eventNameRemoved, removeEvent]
    )
  ),
  */

  f.forEach(
    f.zip(node.children, vNode.children),
    (args) => reflow(...args)
  )
)

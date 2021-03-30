import * as f from 'f'
import hook from 'hook'

const magic = f.magic('reflow')
const reflow = (attributes) =>
  f.assign(attributes, {
    [magic]: (newAttributes) => {
      f.forEach(
        f.zip(attributes.list, newAttributes.list),
        ([attribute, newAttribute]) => (
          f.and(
            f.equal(attribute.key, newAttribute.key),
            f.different(attribute.value, newAttribute.value)
          ) && attributes.set(attribute.key, newAttribute.value),

          f.different(attribute.key, newAttribute.key) && (
            attributes.remove(attributes.key),
            attributes.set(newAttribute.key, newAttribute.value)
          )
        )
      )
    }
  })

export default hook(reflow)

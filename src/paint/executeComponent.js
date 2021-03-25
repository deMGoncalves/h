import * as f from 'f'
import wrapContext from './wrapContext'

export default (componentRef, entity, children) =>
  f.assign(componentRef(wrapContext(entity), children), { ['__entity__']: entity })

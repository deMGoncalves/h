import * as f from 'f'
import createHookReflow from './createHookReflow'
import createComponent from './createComponent'
import hasComponentInKlass from './hasComponentInKlass'

export default f.cond(
  [hasComponentInKlass, createComponent],
  [f.T, createHookReflow]
)

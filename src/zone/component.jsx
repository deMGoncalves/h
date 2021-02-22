import h from '@/h'
import Hide from '@/hide'

export default (zone, children) =>
  <section className={zone.className} slot={zone.slot}>
    <Hide if={zone.offScreen}>
      {children}
    </Hide>
  </section>

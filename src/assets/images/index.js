// Central image map. Replace a file in its folder (or change the import) and every page updates.
import logo from './logo.jpg';
import workshopLathe from './hero/workshop-lathe.png';
import facility from './about/facility.png';
import actuators from './products/actuators.png';
import actuatorWrapped from './products/actuator-wrapped.png';
import craneLift from './maintenance/crane-lift.png';
import grinder from './services/grinder.png';
import lathe from './services/lathe.png';
import drill from './services/drill.png';

export const images = {
  logo,
  heroImage: workshopLathe,
  aboutImage: facility,
  valveImage: actuators,
  productImage: actuatorWrapped,
  maintenanceImage: craneLift,
  rotaryImage: actuatorWrapped,
  workshopImage: grinder,
  industrialImage: lathe,
  instrumentationImage: null, // no photo supplied: a technical pattern is shown instead
  machiningImage: drill,
};

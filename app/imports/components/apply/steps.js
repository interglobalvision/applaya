// Import apply parts
import TextTest from '/imports/components/apply/text-test.jsx';
import FormTest from '/imports/components/apply/form-test.jsx';

const Steps = [{ // 1
  component: FormTest,
  name: 'First Form',
}, { // 2
  component: TextTest,
  name: 'Text page example',
}];

export default Steps;

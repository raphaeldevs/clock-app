import { FiCloudRain } from 'react-icons/fi'

import { Container, IconStyles } from './styles'

export default function Climate() {
	return (
  	<Container>
  		<FiCloudRain style={IconStyles} />
      <strong>19°</strong>
  	</Container>
	)
}
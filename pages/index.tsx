import NextLink from 'next/link'

import BigText from 'components/BigText'
import AltCont from 'components/Container/AltCont'

export default function Home() {
  return (
    <AltCont>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Carolina Crypto Collab', '', '']} />
        <br />
        <br />
        <NextLink href='/about' passHref>
          <Button as='a' bg='red'>
            Enter Site
          </Button>
        </NextLink>
      </div>
    </AltCont>
  )
}

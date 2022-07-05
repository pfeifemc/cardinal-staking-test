import { tryPublicKey } from '@cardinal/namespaces-components'
import { stakePoolMetadatas } from 'api/mapping'
import { useRouter } from 'next/router'

export const useStakePoolId = () => {
  const publicKey = tryPublicKey("8tfz1G3PrCtnEZfXfnQAMHXYLfgSDjSAQ6XTrxSk9iz")

  return publicKey
}

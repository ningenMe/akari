import { GetServerSideProps, NextPage } from 'next'
import { PathConst } from '../constants/Const'

export const Index: NextPage = () => null

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: PathConst.HOME, permanent: true } }
}

export default Index

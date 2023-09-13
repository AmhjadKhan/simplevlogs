import profile from '../assets/hardy.png'

function Header() {
  return (
    <div className='flex justify-between p-10 border-b-4 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
      <img className='w-12' src={profile} alt="" />
    </div>
  )
}

export default Header

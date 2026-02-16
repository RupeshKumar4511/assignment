import { useEffect, useMemo, useState } from 'react'
import { useTheme } from '../context/useTheme'

export default function Users({currentUser}){
  
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [search,setSearch]=useState("")
  const [sort,setSort]=useState("az")
  const [page,setPage]=useState(1)
  const [selected,setSelected]=useState(null)
  const perPage=5

  const {theme} = useTheme()
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r=>r.json())
      .then(d=>{setUsers([currentUser,...d]);setLoading(false)})
      .catch(()=>{setError('Failed to load users');setLoading(false)})
  },[])

  const filtered=useMemo(()=>{
    let data=[...users]
    if(search){
      const q=search.toLowerCase()
      data=data.filter(u=>u.name.toLowerCase().includes(q)||u.email.toLowerCase().includes(q))
    }
    data.sort((a,b)=> sort==='az'?a.name.localeCompare(b.name):b.name.localeCompare(a.name))
    return data
  },[users,search,sort])

  const totalPages=Math.ceil(filtered.length/perPage)
  const paginated=filtered.slice((page-1)*perPage,page*perPage)

  if(loading) return <div className='p-10 text-white/70'>Loading users...</div>
  if(error) return <div className='p-10 text-red-400'>{error}</div>

  return (
    <div className='p-10 space-y-6'>
      <div className='flex gap-4 items-center'>
        <input value={search} onChange={e=>{setPage(1);setSearch(e.target.value)}} placeholder='Search name or email' className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' } border border-white px-4 py-2 rounded-lg outline-none`}/>
        <select value={sort} onChange={e=>setSort(e.target.value)} className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' } border border-white  px-3 py-2 rounded-lg`}>
          <option value='az'>A–Z</option>
          <option value='za'>Z–A</option>
        </select>
      </div>

      <div className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' }  rounded-xl overflow-hidden `}>
        <table className='w-full text-left'>
          <thead className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-blue-300 text-black' }  `}>
            <tr>
              <th className='p-4'>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map(u=>(
              <tr key={u.id} onClick={()=>setSelected(u)} className='hover:bg-white/5 cursor-pointer'>
                <td className='p-4'>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex gap-2'>
        {Array.from({length:totalPages}).map((_,i)=>(
          <button key={i} onClick={()=>setPage(i+1)} className={`px-3 py-1 rounded ${page===i+1?'bg-purple-500':theme == 'dark' ? 'bg-[#05060A] text-white border border-white/40' : 'bg-white text-black' } }`}>
            {i+1}
          </button>
        ))}
      </div>

      {selected && (
        <div className={`fixed inset-0${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' } border border-white flex items-center justify-center`}>
          <div className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' }  border border-white/40 p-8 rounded-xl w-105 space-y-3`}>
            <h3 className='text-xl font-semibold'>{selected.name}</h3>
            <p className='text-white/60'>{selected.email}</p>
            <p className='text-white/60'>{selected.phone}</p>
            <p className='text-white/60'>{selected.website}</p>
            <p className='text-white/60'>{selected.company?.name}</p>
            <button onClick={()=>setSelected(null)} className='mt-4 bg-purple-500 px-4 py-2 rounded'>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
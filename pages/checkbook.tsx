import TableauEmbed from '../components/tableau'
import TableauEmbedFunc from '../components/tableaufun'
//import BasicEmbed from '../components/basicembed'

function Checkbook() {
  return <div suppressHydrationWarning={true} className='height100'>{
    process.browser && <TableauEmbedFunc
      key='checkbook1'
      url='https://public.tableau.com/views/LosAngelesFY2021Checkbookv1/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link'
    />
  }
    </div>
}

export default Checkbook
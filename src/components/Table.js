import React, { useState } from 'react'
import { Table, Space, Input, Pagination } from 'antd'


const TableComponent = ({ filteredData, stateSearch, totalStateWiseCount, totalStateArrayLegth, loading, loadData }) => {
    const [sortedInfo, setSortedInfo] = useState({})
    const [page, setPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
    const [searchText, setSearchText] = useState("")

    const handleChange = (_filters, sorter) => {
        const { order, filled } = sorter
        setSortedInfo({ columnkey: filled, order })
    }

    // const indexOfLastPage = page+postPerPage
    // const indexofFirstPage = indexOfLastPage-postPerPage
    // const currentStateCovidCount = totalStateWiseCount.slice(
    //     indexOfLastPage,
    //     indexofFirstPage
    // )

    // const onShowSizeChange = (current,pageSize) => {
    //     setPostPerPage(pageSize)
    // }

    // const itemRender = (current,type,originalElement) => {
    //     if(type==='prev'){
    //         return <a className='text-primary'>Previous</a>
    //     }
    //     if (type === 'next') {
    //         return <a className='text-info'>Next</a>
    //     }
    //     return originalElement
    // }

    const columns = [
        {
            title: 'State',
            dataIndex: 'state',
            sorter: (a, b) => a.state.length - b.state.length,
            sortOrder: sortedInfo.columnkey === 'state' && sortedInfo.order,
            width: 280
        },
        {
            title: 'Confirmed',
            dataIndex: 'confirmed',
            sorter: (a, b) => a.confirmed.length - b.confirmed.length,
            sortOrder: sortedInfo.columnkey === 'confirmed' && sortedInfo.order,
            width: 180
        },
        {
            title: 'Active',
            dataIndex: 'active',
            sorter: (a, b) => a.active.length - b.active.length,
            sortOrder: sortedInfo.columnkey === 'active' && sortedInfo.order,
            width: 180
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            sorter: (a, b) => a.recovered.length - b.recovered.length,
            sortOrder: sortedInfo.columnkey === 'recovered' && sortedInfo.order,
            width: 180
        },
        {
            title: 'Deaths',
            dataIndex: 'deaths',
            sorter: (a, b) => a.deaths.length - b.deaths.length,
            sortOrder: sortedInfo.columnkey === 'deaths' && sortedInfo.order,
            width: 180
        },
        {
            title: 'Daily Confirmed',
            dataIndex: 'deltaconfirmed',
            sorter: (a, b) => a.deltaconfirmed.length - b.deltaconfirmed.length,
            sortOrder: sortedInfo.columnkey === 'deltaconfirmed' && sortedInfo.order,
            width: 180
        },
        {
            title: 'Daily Recovered',
            dataIndex: 'deltarecovered',
            sorter: (a, b) => a.deltarecovered.length - b.deltarecovered.length,
            sortOrder: sortedInfo.columnkey === 'deltarecovered' && sortedInfo.order,
            width: 180
        },
        {
            title: 'Daily Deaths',
            dataIndex: 'deltadeaths',
            sorter: (a, b) => a.deltadeaths.length - b.deltadeaths.length,
            sortOrder: sortedInfo.columnkey === 'deltadeaths' && sortedInfo.order,
            width: 180
        },
    ];

    const handleSearch = (e) => {
        setSearchText(e.target.value)
        if (e.target.value === "") {
            loadData()
        }
    }

    const clearAll = () => {
        setSortedInfo({})
        setSearchText('')
        loadData()
    }

    const refresh = () => {
        window.location.reload()
    }

    return (
        <>
            <Space style={{ marginBottom: 16, marginTop: 12 }}>
                <Input
                    placeholder='Search your state'
                    onChange={handleSearch}
                    type='text'
                    style={{ height: '35px' }}
                    allowClear
                    value={searchText}
                />
                <button onClick={() => stateSearch(searchText)}>Search</button>
                <button onClick={clearAll} >Clear</button>
                <button onClick={refresh}>Refresh</button>
            </Space>


            <Table
                columns={columns}
                dataSource={totalStateWiseCount}
                // dataSource={
                //     filteredData&&filteredData.length?filteredData
                // }
                pagination={false}
                onChange={handleChange}
            />
            {/* <Space style={{marginBottom:16,marginTop:10}}>
        <Pagination 
        onChange={(value)=>setPage(value)}
        pageSize={postPerPage}
        total={totalStateArrayLegth}
        current={page}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
        itemRender={itemRender}
        />
    </Space> */}
        </>
    )
}

export default TableComponent;
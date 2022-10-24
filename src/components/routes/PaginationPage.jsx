import React from 'react'
import { TablePagination } from "@mui/material";

const cardItem = [{
    id: '1',
    image: 'https://polkadot.network/content/images/2022/10/image1.png',
    title: 'First Parachain Successfully Migrates from Kusama to Polkadot',
    para: 'KILT Protocols migration from Kusama to Polkadot is an important technical milestone and the first parachain migration. Polkadots canary network model allows Web3 projects to test their technology in a real-world environment before upgrading to stable production networks....'
}, {
    id: '2',
    image: 'https://polkadot.network/content/images/2022/09/004-smol.png',
    title: 'Polkadot Roadmap Roundup',
    para: 'A proposed roadmap for upcoming developments on Polkadot. Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and more....'
}, {
    id: '4',
    image: 'https://polkadot.network/content/images/2022/08/image1.jpg',
    title: 'Sub0, the Polkadot Developer Conference, comes to Lisbon in November',
    para: 'The two-day live sub0 conference will run on November 28th-29th. Featuring keynote presentations, breakout sessions, workshops &amp; side events. Sign up for ticket updates....'
}, {
    id: '5',
    image: 'https://polkadot.network/content/images/2022/08/CGPs.png',
    title: 'Proposal for Common Good Parachains',
    para: 'Introducing a proposed roadmap for future developments on common good parachains, subject to approval by Polkadots decentralized governance community....'
}, {
    id: '6',
    image: 'https://polkadot.network/content/images/2022/07/Frame-4.png',
    title: 'Gov2: Polkadot’s Next Generation of Decentralised Governance',
    para: 'Read the proposal for Polkadots next-generation governance system - currently known as Gov2 - to discover how it aims to advance the decentralisation of the network....'
}, {
    id: '7',
    image: 'https://polkadot.network/content/images/2022/06/Staking_blogpost.png',
    title: 'Introducing the Polkadot Staking Dashboard: The Easiest Way to Nominate and Stake Your DOT',
    para: 'Staking your DOT just got a whole lot easier with Polkadot’s new staking dashboard, a user-friendly interface for staking natively on Polkadot....'
}, {
    id: '8',
    image: 'https://polkadot.network/content/images/2022/04/XCMv2--2-.png',
    title: 'XCMv2 Audit Completed by Quarkslab',
    para: 'XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains...'
}, {
    id: '9',
    image: 'https://polkadot.network/content/images/2022/01/Encointer-Blog-Cover-1.jpeg',
    title: 'Introducing Encointer: Making Web3 Truly Inclusive',
    para: 'Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity....'
}, {
    id: '10',
    image: 'https://polkadot.network/content/images/2021/12/Statemint-1.png',
    title: 'Polkadot v1.0: Sharding and Economic Security',
    para: 'This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards....'
}, {
    id: '11',
    image: 'https://polkadot.network/content/images/2021/12/2021-Roundup.jpg',
    title: 'Polkadot 2021 Roundup',
    para: 'The holiday season is coming around again and with the new year, let’s take a quick retrospective about what the Polkadot project achieved over 2021....'
}, {
    id: '12',
    image: 'assests/card-img.png',
    title: 'Making History, Again: Polkadot Auctions 1-5',
    para: 'Following the successful completion of Polkadots first batch of auctions, we review what happened and look at the data....'
}, {
    id: '13',
    image: 'https://polkadot.network/content/images/2021/12/Statemint-1.png',
    title: 'Statemint Becomes First Common Good Parachain on Polkadot',
    para: 'After approval by the Polkadot community, the the Shell parachain was upgraded to Statemint, Polkadot’s common-good parachain for fungible and non-fungible assets....'
}, {
    id: '14',
    image: 'https://polkadot.network/content/images/2022/04/XCMv2--2-.png',
    title: 'XCMv2 Audit Completed by Quarkslab',
    para: 'XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains...'
}, {
    id: '15',
    image: 'https://polkadot.network/content/images/2022/08/CGPs.png',
    title: 'Proposal for Common Good Parachains',
    para: 'Introducing a proposed roadmap for future developments on common good parachains, subject to approval by Polkadots decentralized governance community....'
}, {
    id: '16',
    image: 'https://polkadot.network/content/images/2022/08/CGPs.png',
    title: 'Proposal for Common Good Parachains',
    para: 'Introducing a proposed roadmap for future developments on common good parachains, subject to approval by Polkadots decentralized governance community....'
}, {
    id: '17',
    image: 'https://polkadot.network/content/images/2021/12/Statemint-1.png',
    title: 'Polkadot v1.0: Sharding and Economic Security',
    para: 'This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards....'
}, {
    id: '18',
    image: 'assests/card-img.png',
    title: 'Making History, Again: Polkadot Auctions 1-5',
    para: 'Following the successful completion of Polkadots first batch of auctions, we review what happened and look at the data....'
}, {
    id: '19',
    image: 'https://polkadot.network/content/images/2022/07/Frame-4.png',
    title: 'Polkadot Roadmap Roundup',
    para: 'A proposed roadmap for upcoming developments on Polkadot. Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and more....'
}, {
    id: '20',
    image: 'https://polkadot.network/content/images/2022/09/004-smol.png',
    title: 'Polkadot Roadmap Roundup',
    para: 'A proposed roadmap for upcoming developments on Polkadot. Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and more....'
}, {
    id: '1',
    image: 'https://polkadot.network/content/images/2022/10/image1.png',
    title: 'First Parachain Successfully Migrates from Kusama to Polkadot',
    para: 'KILT Protocols migration from Kusama to Polkadot is an important technical milestone and the first parachain migration. Polkadots canary network model allows Web3 projects to test their technology in a real-world environment before upgrading to stable production networks....'
}]


const PaginationPage = () => {

    // Used Page Nevigation
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    //........end Page Nevigation

    return (
        <div className="blog-hero-section py-3 py-md-5">
            <div className="container pb-0 pb-md-5">
                <div className="row pb-3 pb-md-5">
                    <h1 className="text-center display-3 fw-bold aos-init aos-animate" data-aos="fade-up">Polkadot blog</h1>
                </div>
                <div className="row pt-0 pt-md-5">
                    {cardItem
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((data) => (
                            <div className="col-12 col-md-6 col-lg-4 d-flex" key={data.id}>
                                <div className="card border shadow">
                                    <a href="/">
                                        <img className="card-img-top" src={data.image} height={150} alt="" />
                                    </a>
                                    <div className="card-body py-3">
                                        <a href="/" className="mb-2 d-block text-decoration-none color-E6007A">Parachain</a>
                                        <a href="/" className='text-decoration-none text-black'>
                                            <h5 className='fw-bold'>{data.title}</h5>
                                        </a>
                                        <div>
                                            <p className="mb-0 ">{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <div class="row justify-content-center mt-3">
                    <div class="col-auto">
                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item"><span class="page-link disabled">Page 1 of 10</span></li>
                                <li class="page-item"><a class="page-link page-nav-hover" href="/">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div> */}
            </div>


            {/* Products Pagenations */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20]}
                component="div"
                count={cardItem.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default PaginationPage
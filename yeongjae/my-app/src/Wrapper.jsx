import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';

import Cardbox from './Cardbox';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Wrapper() {
    return (
        <body id="page-top">
            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <div class="container-fluid">
                            <div class="row">
                                <Cardbox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Wrapper;

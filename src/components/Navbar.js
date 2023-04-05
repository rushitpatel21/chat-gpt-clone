import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className="flex-lg-column my-0 sidemenu-navigation" style={{ width: '5rem' }}>
                <ul className="nav nav-pills side-menu-nav" role="tablist">
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation" title="Search">
                        <a className="nav-link active" id="pills-search-tab" data-bs-toggle="pill" href="#pills-search" role="tab">
                            <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-lg-block" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation" title="Profile">
                        <a className="nav-link" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown profile-user-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item d-flex align-items-center justify-content-between" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">Profile</a>
                            <a className="dropdown-item d-flex align-items-center justify-content-between" id="pills-setting-tab" data-bs-toggle="pill" href="#pills-setting" role="tab">Setting</a>
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="auth-changepassword.html">Change Password</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="auth-logout.html">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="chat-leftsidebar">
                <div className="tab-content">
                    <div className="tab-pane" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                        <div>
                            <div className="user-profile-img">
                                <img src="https://themesbrand.com/doot/layouts/assets/images/small/img-4.jpg" className="profile-img" style={{ height: '160px' }} alt="" />
                                <div className="overlay-content">
                                    <div>
                                        <div className="user-chat-nav p-2 ps-3">
                                            <div className="d-flex w-100 align-items-center">
                                                <div className="flex-grow-1 mt-1">
                                                    <h5 className="text-white mb-0">My Profile</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                                <div className="mb-lg-3 mb-2">
                                    <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="" />
                                </div>
                                <h5 className="font-size-16 mb-1 text-truncate">Rushit Patel</h5>
                                <p className="text-muted font-size-14 text-truncate mb-0">Front end Developer</p>
                            </div>
                            <div className="p-4 profile-desc" data-simplebar>
                                <div className="text-muted">
                                    <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple.</p>
                                </div>
                                <div>
                                    <div className="d-flex py-2">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="bx bx-user align-middle text-muted" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Rushit Patel</p>
                                        </div>
                                    </div>
                                    <div className="d-flex py-2">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="bx bx-message-rounded-dots align-middle text-muted" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">adc@123.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex py-2">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="bx bx-location-plus align-middle text-muted" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">California, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end user-profile-desc */}
                        </div>
                        {/* End profile content */}
                    </div>
                    <div className="tab-pane active" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab">
                        {/* Start Contact content */}
                        <div>
                            <div className="px-4 pt-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-4">Search</h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">
                                            {/* <button type="button" className="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addContact-exampleModal">
                                                <i className="bx bx-plus" />
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    {/* <div className="input-group mb-4">
                                        <input type="text" className="form-control bg-light border-0 pe-0" id="searchContact" onkeyup="searchContacts()" placeholder="Search here.." aria-label="Search Contacts..." aria-describedby="button-searchcontactsaddon" autoComplete="off" />
                                        <button className="btn btn-light" type="button" id="button-searchcontactsaddon"><i className="bx bx-search align-middle" /></button>
                                    </div> */}
                                </form>
                            </div>
                            <div className="chat-message-list chat-group-list" data-simplebar>
                                <div className="sort-contact">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
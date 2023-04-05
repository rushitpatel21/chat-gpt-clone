import React, { useState } from 'react'
import { fetchData } from '../Api/api';
const { useMutation } = require('react-query');

export const Home = () => {

    const [message, setMessage] = useState('');

    const [chat, setChat] = useState([]);

    const mutation = useMutation({
        mutationFn: () => {
            return fetchData(chat)
        },
        onSuccess: (data) => {
            setChat((prev) => [
                ...prev,
                { sender: "ai", message: data.message.replace(/^\n\n/, "") },
            ])
        }
    });

    const sendMessage = async (message) => {
        await Promise.resolve(setChat((prev) => [...prev, message]));
        mutation.mutate();
    };


    const _handleInput = (e) => {
        e.preventDefault()
        if (e.target.value) {
            setMessage(e.target.value)
        }
    }

    const _handleSubmitBtn = (e) => {
        if (message === "") return;
        sendMessage({ sender: 'user', message: message })
        setMessage('')
    }

    return (
        <>
            <div className="user-chat w-100 overflow-hidden">
                <div className="user-chat-overlay" />
                <div className="chat-content d-lg-flex">
                    <div className="w-100 overflow-hidden position-relative">
                        <div id="users-chat" className="position-relative">
                            <div className="p-3 p-lg-4 user-chat-topbar">
                                <div className="row align-items-center">
                                    <div className="col-sm-4 col-8">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                        <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" className="rounded-circle avatar-sm" alt="" />
                                                        <span className="user-status" />
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h6 className="text-truncate mb-0 font-size-18"><a href="#" className="user-profile-show text-reset">Chat GPT</a></h6>
                                                        <p className="text-truncate text-muted mb-0"><small>Online</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-4">
                                        <ul className="list-inline user-chat-nav text-end mb-0">
                                            {/* <li className="list-inline-item">
                                                <div className="dropdown">
                                                    <button className="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="bx bx-search" />
                                                    </button>
                                                    <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                                        <div className="search-box p-2">
                                                            <input type="text" className="form-control" placeholder="Search.." id="searchChatMessage" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-conversation p-3 p-lg-4 " id="chat-conversation" data-simplebar>
                                <ul className="list-unstyled chat-conversation-list" id="users-conversation">
                                    {
                                        chat && chat.map((data, index) => {
                                            return <li className={`chat-list ${data.sender === 'user' ? 'right' : 'left'}`} key={index}>
                                                <div className="conversation-list">
                                                    <div className="chat-avatar"><img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" alt="" /></div>
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">{data.message}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        })
                                    }
                                    {
                                        mutation.isLoading ? <li className='chat-list left'>
                                                <div className="conversation-list">
                                                    <div className="chat-avatar"><img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" alt="" /></div>
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Typing...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>:''
                                    }
                                </ul>
                            </div>
                            {/* <div className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoard" role="alert">
                                message copied
                            </div> */}
                        </div>
                        <div className="position-relative">
                            <div className="chat-input-section p-3 p-lg-4">
                                <div className="row g-0 align-items-center">
                                    <div className="col">
                                        <div className="position-relative">
                                            <div className="chat-input-feedback">
                                                Please Enter a Message
                                            </div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                className="form-control form-control-lg chat-input"
                                                autoFocus
                                                id="chat-input"
                                                placeholder="Type your message..."
                                                name='user'
                                                value={message}
                                                onChange={_handleInput}
                                                onKeyDown={(e) => {
                                                    e.keyCode === 13 && e.shiftKey === false && _handleSubmitBtn()
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="chat-input-links ms-2 gap-md-1">
                                            <div className="links-list-item">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target=".chat-input-collapse1.show"
                                                    onClick={_handleSubmitBtn}
                                                >
                                                    <i className="fa fa-paper-plane" aria-hidden="true" id="submit-btn"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
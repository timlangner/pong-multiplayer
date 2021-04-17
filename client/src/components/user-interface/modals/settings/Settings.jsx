import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Navbar from "./navbar/Navbar";
import GeneralPage from "./pages/general/GeneralPage";
import AppearancePage from "./pages/appearance/AppearancePage";
import "./settings.scss";

const Settings = (props) => {
    const [selectedPage, setSelectedPage] = useState(0);

    return (
        <Modal
            {...props}
            size="lg"
            contentClassName="settings-modal-content"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{ minHeight: "calc(100vh - 450px)", overflowY: "auto" }}
            >
                <Navbar
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <main>
                    {selectedPage === 0 ? (
                        <GeneralPage />
                    ) : selectedPage === 1 ? (
                        <AppearancePage />
                    ) : null}
                </main>
            </Modal.Body>
        </Modal>
    );
};

export default Settings;

import React, { useState } from "react";
import { 
    Input,
    Space,
    Modal,
    Table,
    Image,
    Select, 
    Button,
    DatePicker,
    Typography,
    Divider,
} from "antd";

import { handleApproveContent, handleRejectContent, getAllOrder } from "../../_services";

import "./_contentApproval.css";

const { Text } = Typography;

export const ModalApproval = ({
    detailCotentInfo, 
    isModalApprovalOpen, 
    setIsModalApprovalOpen, 
    selectedChannel,
    selectedStatus,
    setDataTable,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    // console.log(detailCotentInfo.id);
    return (
        <Modal 
            title="Konten Approval" 
            width={600}
            visible={isModalApprovalOpen}
            onCancel={() => {
                setIsModalApprovalOpen(false);
                console.log("CANCEL");
            }}
            footer={[
                <Button
                    key={"REJECT"}
                    loading={isLoading}
                    disabled={detailCotentInfo.status !== "PAID" ? true : false}
                    type="danger"
                    onClick={() => {
                        handleRejectContent(
                            detailCotentInfo.id, 
                            setIsLoading, 
                            setIsModalApprovalOpen, 
                            getAllOrder, 
                            selectedChannel,
                            selectedStatus,
                            setDataTable,
                        );
                        console.log("REJECT");
                    }}
                >
                    REJECT
                </Button>,
                <Button
                    key={"APPROVE"}
                    type="success"
                    loading={isLoading}
                    disabled={detailCotentInfo.status !== "PAID" ? true : false}
                    onClick={() => {
                        handleApproveContent(
                            detailCotentInfo.id, 
                            setIsLoading, 
                            setIsModalApprovalOpen, 
                            getAllOrder, 
                            selectedChannel,
                            selectedStatus,
                            setDataTable,
                        );
                        console.log("APPROVAL");
                    }}
                >
                    APPROVE
                </Button>
            ]}
        >
            <div className="modal-content-header-container">
                {
                    detailCotentInfo.image !== null && (
                        <Image
                            width={300}
                            preview={false}
                            src={detailCotentInfo.image}
                        />
                    )
                }
                <Text style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center", marginTop: "10px" }} >{detailCotentInfo.title}</Text>
                <Divider orientation="left">Pesan Konten</Divider>
                <Text style={{ textAlign: "justify" }} >{detailCotentInfo.message}</Text>
            </div>
        </Modal>
    );
};
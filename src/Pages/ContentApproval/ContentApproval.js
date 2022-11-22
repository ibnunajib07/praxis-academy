import React, { useEffect, useState } from "react";
import { 
    Badge,
    Input,
    Space,
    Table,
    Image,
    Select, 
    Button,
    Tooltip,
    Typography,
} from "antd";
import { EditOutlined } from "@ant-design/icons";

import { ModalApproval } from "./ModalApproval";

import iconFlashSMS from "../../Assets/images/icon-flashSMS.png";
import iconMMS from "../../Assets/images/icon-mms.png";
import iconSimAds from "../../Assets/images/icon-simAds.png";
import iconSMS from "../../Assets/images/icon-sms.png";
import iconWhatsapp from "../../Assets/images/icon-whatsapp.png";

import orderStatusList from "./_statusData.json";
import channelList from "./_channelData.json";

import "./_contentApproval.css";

const { Option } = Select;
const { Search } = Input;
const { Text } = Typography;

export const ContentApproval = () => {
    const dataOrder = JSON.parse(localStorage.getItem("allOrdersList"));
    const [dataTable, setDataTable] = useState(dataOrder);
    const [selectedChannel, setSelectedChannel] = useState(undefined);
    const [selectedStatus, setSelectedStatus] = useState(undefined);
    const [isModalApprovalOpen, setIsModalApprovalOpen] = useState(false);
    const [detailCotentInfo, setDetailContentInfo] = useState({});
    // console.log(dataTable.filter((data) => data.status === "PAID"));

    const ChannelRender = ({index, platform}) => {
        switch (true) {
            case platform === "smsFlash":
                return (
                    <Tooltip key={index} title={"SMS FLASH"} >
                        <Image
                            width={50}
                            height={50}
                            preview={false}
                            src={iconFlashSMS}
                        />
                    </Tooltip>
                );
            case platform === "mms":
                return (
                    <Tooltip key={index} title={"MMS"} >
                        <Image
                            width={50}
                            height={50}
                            preview={false}
                            src={iconMMS}
                        />
                    </Tooltip>
                );
            case platform === "simAds":
                return (
                    <Tooltip key={index} title={"POP UP"} >
                        <Image
                            width={50}
                            height={50}
                            preview={false}
                            src={iconSimAds}
                        />
                    </Tooltip>
                );
            case platform === "simAds":
                return (
                    <Tooltip key={index} title={"SMS"} >
                        <Image
                            width={50}
                            height={50}
                            preview={false}
                            src={iconSMS}
                        />
                    </Tooltip>
                );
            case platform === "whatsapp":
                return (
                    <Tooltip key={index} title={"Whatsapp"} >
                        <Image
                            width={50}
                            height={50}
                            preview={false}
                            src={iconWhatsapp}
                        />
                    </Tooltip>
                );
            default:
                break;
        }
    };

    const StatusRender = ({index, status}) => {
        switch (true) {
            case status === "PAID":
                return (
                    <Badge
                        key={index}
                        count={`${status}`}
                        style={{
                            backgroundColor: 'gold',
                        }}
                    />
                );
            case status === "UNPAID":
                return (
                    <Badge
                        key={index}
                        count={`${status}`}
                        style={{
                            backgroundColor: 'red',
                        }}
                    />
                );
            case status === "APPROVED":
                return (
                    <Badge
                        key={index}
                        count={"BLASTING"}
                        style={{
                            backgroundColor: 'green',
                        }}
                    />
                );
            case status === "BLASTING":
                return (
                    <Badge
                        key={index}
                        count={`${status}`}
                        style={{
                            backgroundColor: 'green',
                        }}
                    />
                );
            case status === "DONE":
                return (
                    <Badge
                        key={index}
                        count={`${status}`}
                        style={{
                            backgroundColor: 'blue',
                        }}
                    />
                );
            case status === "REJECTED":
                return (
                    <Badge
                        key={index}
                        count={`${status}`}
                        style={{
                            backgroundColor: 'silver',
                        }}
                    />
                );
            default:
                break;
        }
    };

    const tableColumns = [
        {
            title: "Judul Konten",
            dataIndex: ["title", "image"],
            render: ((_, {title, image}, index) => (
                <Space key={index} direction="horizontal">
                    {
                        image !== null ?
                        <Image
                            width={50}
                            height={50}
                            src={image}
                        />
                        :
                        null
                    }
                    <Text>{title.slice(0, 40)}...</Text>
                </Space>
            ))
        },
        {
            title: "Isi Pesan",
            dataIndex: "message",
            render: ((_, {message}, index) => (
                <Text key={index}>{message.slice(0, 40)}...</Text>
            ))
        },
        {
            title: "Channel",
            dataIndex: "platform",
            render: ((_, {platform}, index) => (
                <ChannelRender index={index} platform={platform} />
            ))
        },
        {
            title: "Status",
            dataIndex: "status",
            render: ((_, {status}, index) => (
                <StatusRender index={index} status={status} />
            ))
        },
        {
            title: "Action",
            dataIndex: "key",
            render: ((_, data, index) => 
                <Tooltip key={index} title={"Approval"} >
                    <Button
                        type="primary"
                        shape="circle" 
                        icon={<EditOutlined />} 
                        onClick={() => {
                            setIsModalApprovalOpen(true);
                            setDetailContentInfo(data);
                        }}
                    />
                </Tooltip>
            )
        }
    ];

    return (
        <div className="content-approval-page-container">
            <div className="filter-container">
                <Space direction="horizontal" size={"large"} >
                    <Text style={{ fontSize: "15px", fontWeight: "bold" }}>Filter By: </Text>
                    <Select
                        showSearch
                        allowClear
                        size="large"
                        style={{ width: 200 }}
                        value={selectedChannel}
                        placeholder="Channel"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.value.toLowerCase().includes(input?.toLowerCase())}
                        onClear={() => {
                            setSelectedChannel(undefined);
                        }}
                        onChange={(e) => {
                            setSelectedStatus(undefined);
                            if (e === undefined) return setDataTable(dataOrder);
                            setDataTable(dataOrder.filter((data) => data.platform === e));
                            setSelectedChannel(channelList.filter((data) => data.value === e)[0].name);
                        }}
                    >
                        {
                            channelList.map((items, index) => 
                                <Option key={index} value={items.value}>{items.name}</Option>
                            )
                        }
                    </Select>
                    <Select
                        showSearch
                        allowClear
                        size="large"
                        style={{ width: 200 }}
                        value={selectedStatus}
                        placeholder="Status"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.value.toLowerCase().includes(input?.toLowerCase())}
                        onClear={() => {
                            setSelectedStatus(undefined);
                        }}
                        onChange={(e) => {
                            setSelectedChannel(undefined);
                            if (e === undefined) return setDataTable(dataOrder);
                            setDataTable(dataOrder.filter((data) => data.status === e));
                            setSelectedStatus(orderStatusList.filter((data) => data.value === e)[0].name);
                        }}
                    >
                        {
                            orderStatusList.map((items, index) => 
                                <Option key={index} value={items.value}>{items.name}</Option>
                            )
                        }
                    </Select>
                </Space>
            </div>
            <div className="table-container">
                <Table 
                    rowKey={(data) => data.id}
                    style={{ width: "100%" }} 
                    dataSource={dataTable} 
                    columns={tableColumns} 
                />
            </div>

            <ModalApproval 
                detailCotentInfo={detailCotentInfo}
                isModalApprovalOpen={isModalApprovalOpen}
                setIsModalApprovalOpen={setIsModalApprovalOpen}
                selectedChannel={selectedChannel}
                selectedStatus={selectedStatus}
                setDataTable={setDataTable}
            />
        </div>
    );
};
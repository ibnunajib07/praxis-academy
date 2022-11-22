import React, { useCallback, useEffect, useState } from "react";
import { 
    Space, 
    Typography, 
    Input, 
    Button, 
    InputNumber,
    Select,
    DatePicker,
    Radio,
    Divider,
    Row,
    Col
} from "antd";
import {  
    PlusCircleOutlined, 
    MinusCircleOutlined 
} from "@ant-design/icons";
import moment from "moment";

import { corporateRegistration } from "../../_services";

import "./_registration.css";

const { Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

const channelData = [
    {
        id: 1,
        name: "POP UP",
        value: "simAds",
    },
    {
        id: 2,
        name: "Flash SMS",
        value: "smsFlash",
    },
    {
        id: 3,
        name: "Whatsapp",
        value: "whatsapp",
    },
    {
        id: 4,
        name: "MMS",
        value: "mms",
    },
    {
        id: 5,
        name: "SMS",
        value: "sms",
    }
];

const effectiveDateOptions = [
    {
        label: "Sesuai Tanggal Aktif Kontrak",
        value: "general"
    },
    {
        label: "Kontrak Khusus",
        value: "specific"
    }
];

export const CorporateRegistration = () => {
    const [filteredChannelData, setFilteredChannelData] = useState(channelData);
    const [channelDeals, setChannelDeals] = useState([
        {
            platform: "",
            price: 0,
            selectedEffectiveDateOptions: "",
            effectiveStartDate: "",
            effectiveEndDate: "",
        }
    ]);
    
    const [formData, setFormData] = useState(
        {
            companyName: "",
            personResponsibleName: "",
            personResponsibleContact: "",
            contractValue: 0,
            contractActiveDateStart: "",
            contractActiveDateEnd: "",
            userName: "",
            email: "",
            password: ""
        }
    );

    const poolChannelDeals = (e, index) => {
        const { key, value } = e;
        const list = [...channelDeals];
        list[index][key] = value;
        setChannelDeals(list);
    };

    // console.table(formData);
    // console.table(channelDeals);

    useEffect(() => {
        const selectedChannel = channelDeals.map((data) => data.platform);
        const newChannelData = channelData.filter((data) => !selectedChannel.includes(data.value));
        setFilteredChannelData(newChannelData);
    }, [channelDeals]);

    return (
        <div className="corporate-registration-container">
            <Divider orientation="left" style={{ fontWeight: "bold", marginBottom: "40px" }}>REGISTRASI CORPORATE</Divider>
            <div className="registration-form-container">

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Nama Perusahaan</Text>
                    </div>
                    <div className="form-input-container">
                        <Input 
                            value={formData.companyName}
                            placeholder="Input Nama Perusahaan" 
                            size="large"
                            onChange={(e) => {
                                setFormData({...formData, companyName: e.target.value});
                            }} 
                        />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Nama Penanggung Jawab</Text>
                    </div>
                    <div className="form-input-container">
                        <Input 
                            value={formData.personResponsibleName}
                            disabled={formData.companyName?.length === 0 ? true : false}
                            placeholder="Input Nama Penanggung Jawab" 
                            size="large"
                            onChange={(e) => {
                                setFormData({...formData, personResponsibleName: e.target.value});
                            }} 
                        />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Kontak Penanggung Jawab</Text>
                    </div>
                    <div className="form-input-container">
                        <Input.Group compact>
                            <Input
                                size="large"
                                disabled={true}
                                style={{
                                    width: '15%',
                                }}
                                defaultValue="+62"
                            />
                            <Input
                                type="number"
                                size="large"
                                value={formData.personResponsibleContact.replace("62", "")}
                                maxLength={16}
                                placeholder="Input Kontak Penanggung Jawab" 
                                disabled={formData.personResponsibleName.length === 0 ? true : false}
                                style={{
                                    width: '85%',
                                }}
                                onChange={(e) => {
                                    setFormData({...formData, personResponsibleContact: `62${e.target.value}`});
                                }} 
                            />
                        </Input.Group>
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Nilai Kontrak</Text>
                    </div>
                    <div className="form-input-container">
                        <InputNumber
                            size="large" 
                            controls={false}
                            value={formData.contractValue}
                            style={{ width: "100%" }}
                            disabled={formData.personResponsibleContact.length === 0 ? true : false}
                            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                            placeholder="Input Harga" 
                            addonBefore={"Rp. "} 
                            onChange={(e) => {
                                setFormData({...formData, contractValue: e})
                            }}
                        />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Tanggal Aktif Kontrak</Text>
                    </div>
                    <div className="form-input-container">
                        <RangePicker 
                            size="large"
                            style={{ width: "100%" }}
                            placeholder={["Awal", "Akhir"]}
                            disabled={formData.contractValue === 0 ? true : false}
                            onChange={(date, dateString) => {
                                setFormData({...formData, contractActiveDateStart: dateString[0], contractActiveDateEnd: dateString[1]});
                            }}
                        />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Perjanjian Channel</Text>
                    </div>
                    <div id="form-select-channel" className="form-input-container">
                    {
                        channelDeals.map((data, index) => {
                            return (
                                <div key={index} style={{ marginBottom: "10px" }}>
                                    <div className="channel-selection-container">
                                        <div className="channel-selection">
                                            <Select
                                                showSearch
                                                size="large"
                                                style={{ width: "100%" }}
                                                placeholder={"Pilih Channel"}
                                                optionFilterProp="children"
                                                disabled={formData.contractActiveDateStart.length === 0 && formData.contractActiveDateStart.length === 0 ? true : false}
                                                onChange={(e) => {
                                                    let channel = {
                                                        key: "platform",
                                                        value: e
                                                    };
                                                    poolChannelDeals(channel, index);
                                                }}
                                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                            >
                                                {
                                                    filteredChannelData?.map((items, index) => 
                                                        <Option key={index} value={items.value}>{items.name}</Option>
                                                    )
                                                }
                                            </Select>
                                        </div>
                                        <div className="channel-button-add-and-remove">
                                            {
                                                channelDeals.length !== 1 && (
                                                    <Button
                                                        size="large"
                                                        type="ghost"
                                                        onClick={async () => {
                                                            const list = [...channelDeals];
                                                            list.splice(index, 1);
                                                            setChannelDeals(list);
                                                        }}
                                                    >
                                                        <MinusCircleOutlined style={{ color: "red" }} />
                                                    </Button>
                                                )
                                            }
                                            {
                                                channelDeals.length -1 === index && channelDeals.length < 5 && (
                                                    <Button
                                                        size="large"
                                                        type="ghost"
                                                        disabled={formData.contractActiveDateStart.length === 0 && formData.contractActiveDateStart.length === 0 ? true : false}
                                                        onClick={() => {
                                                            setChannelDeals([...channelDeals, {platform: "", price: 0, selectedEffectiveDateOptions: "", effectiveStartDate: "", effectiveEndDate: ""}]);
                                                        }}
                                                    >
                                                        <PlusCircleOutlined style={{ color: "teal" }} />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {
                                        data.platform.length > 0 && (
                                            <>
                                            <div className="channel-options-container">
                                                <div className="channel-option-label">
                                                    <Text>Harga</Text>
                                                </div>
                                                <div className="channel-option-form">
                                                    <InputNumber
                                                        size="large" 
                                                        controls={false}
                                                        style={{ width: "100%" }}
                                                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                                        placeholder="Input Harga" 
                                                        addonBefore={"Rp. "} 
                                                        onChange={(e) => {
                                                            let setPrice = {
                                                                key: "price",
                                                                value: e
                                                            };
                                                            poolChannelDeals(setPrice, index);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="channel-options-container">
                                                <div className="channel-option-label">
                                                    <Text>Tanggal Berlaku</Text>
                                                </div>
                                                <div className="channel-option-form">
                                                    <Radio.Group 
                                                        style={{ marginBottom: "10px" }}
                                                        options={effectiveDateOptions}
                                                        onChange={({ target: { value } }) => {
                                                            let selectedOptions = {
                                                                key: "selectedEffectiveDateOptions",
                                                                value
                                                            };
                                                            poolChannelDeals(selectedOptions, index);

                                                            if (value === "general") {
                                                                let effectiveStartDate = {
                                                                    key: "effectiveStartDate",
                                                                    value: formData.contractActiveDateStart
                                                                };
    
                                                                let effectiveEndDate = {
                                                                    key: "effectiveEndDate",
                                                                    value: formData.contractActiveDateEnd
                                                                };
                                                                poolChannelDeals(effectiveStartDate, index);
                                                                poolChannelDeals(effectiveEndDate, index);
                                                            } else {
                                                                return;
                                                            }
                                                        }} 
                                                    />
                                                    {
                                                        data.selectedEffectiveDateOptions?.length > 0 && (
                                                            <RangePicker 
                                                                disabled={data.selectedEffectiveDateOptions === "general" ? true : false}
                                                                placeholder={["Awal", "Akhir"]}
                                                                defaultValue={data.selectedEffectiveDateOptions === "general" ? [moment(formData.contractActiveDateStart, "YYYY-MM-DD"), moment(formData.contractActiveDateEnd, "YYYY-MM-DD")] : null}
                                                                size="large"
                                                                onChange={(date, dateString) => {
                                                                    let startDate = dateString[0];
                                                                    let endDate = dateString[1];
                                                        
                                                                    let effectiveStartDate = {
                                                                        key: "effectiveStartDate",
                                                                        value: startDate
                                                                    };
                                                        
                                                                    let effectiveEndDate = {
                                                                        key: "effectiveEndDate",
                                                                        value: endDate
                                                                    };
                                                                    poolChannelDeals(effectiveStartDate, index);
                                                                    poolChannelDeals(effectiveEndDate, index);
                                                                }}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Username</Text>
                    </div>
                    <div className="form-input-container">
                        <Input
                            size="large"
                            value={formData.userName}
                            placeholder="Input Username" 
                            disabled={channelDeals[0].effectiveStartDate.length === 0 && channelDeals[0].effectiveEndDate.length === 0 ? true : false}
                            onChange={(e) => {
                                setFormData({...formData, userName: e.target.value});
                            }} 
                        />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Email</Text>
                    </div>
                    <div className="form-input-container">
                        <Input 
                            size="large"
                            value={formData.email}
                            placeholder="Input Email" 
                            disabled={formData.userName.length === 0 ? true : false}
                            onChange={(e) => {
                                setFormData({...formData, email: e.target.value});
                            }} 
                        />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="label-input-container">
                        <Text><Text style={{ color: "red" }}>*</Text>Password</Text>
                    </div>
                    <div className="form-input-container">
                        <Input 
                            size="large"
                            value={formData.password}
                            placeholder="Input Password" 
                            disabled={formData.email.length === 0 ? true : false}
                            onChange={(e) => {
                                setFormData({...formData, password: e.target.value});
                            }} 
                        />
                    </div>
                </div>

                <div className="button-register-container">
                    <Button
                        type="primary"
                        style={{ minWidth: "50%" }}
                        disabled={formData.password.length < 5 ? true : false}
                        onClick={() => {
                            corporateRegistration(formData, setFormData, channelDeals, setChannelDeals);
                        }}
                    >
                        R E G I S T E R
                    </Button>
                </div>

            </div>
        </div>
    );
};
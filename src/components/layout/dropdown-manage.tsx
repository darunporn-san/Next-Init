import { SignoutIcon } from "@/assets/icons";
import { Button } from "antd";

const DropdownManage = () => {
  return (
    <div className="bg-white px-5 py-4 w-48 shadow-lg rounded-lg">
      <div>ข้อมูลบัญชี</div>
      <div>เปลี่ยนรหัสผ่าน</div>
      <hr  className="my-5 bg-primary pt-0.5 rounded-sm"/>
      <Button className="w-36 text-white bg-[#DD6262] flex justify-center">Sign Out <SignoutIcon/></Button>
    </div>
  );
};
export default DropdownManage;

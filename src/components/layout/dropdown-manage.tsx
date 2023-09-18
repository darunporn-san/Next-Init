import { SignoutIcon } from "@/assets/icons";
import { Button } from "antd";

const DropdownManage = () => {
  return (
    <div className="bg-white px-5 py-4 w-48">
      <div>ข้อมูลบัญชี</div>
      <div>เปลี่ยนรหัสผ่าน</div>
      <hr  className="my-5"/>
      <Button className="w-36 text-white bg-[#DD6262]">Sign Out <SignoutIcon/></Button>
    </div>
  );
};
export default DropdownManage;

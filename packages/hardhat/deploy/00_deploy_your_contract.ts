import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployToDoList: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ToDoList", {
    from: deployer,
    args: [], 
    log: true,
    autoMine: true,
  });

  const toDoList = await hre.ethers.getContract<Contract>("ToDoList", deployer);
  console.log("✅ ToDoList контракт развернут:", toDoList.address);
};

export default deployToDoList;

deployToDoList.tags = ["ToDoList"];
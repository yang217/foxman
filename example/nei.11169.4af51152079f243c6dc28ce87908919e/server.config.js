/*
 * config file for nei server command
 * @author 
 * Auto build by NEI Builder
 */
var path = require('path');
module.exports = {
    /* 根目录 */
    webRoot: 'C:/Users/hzxujunyu/Desktop/memory/fxm/foxman/example/src/main/webapp/',
    /* 视图目录 */
    viewRoot: 'C:/Users/hzxujunyu/Desktop/memory/fxm/foxman/example/src/main/webapp/backend/template/',
    /* 路由 */
    routes: {
      //"ALL /api/*": "代理所有接口, 这里输入代理服务器地址",
      "GET backend/outbound/newOutboundPage": { path: 'get/backend/outbound/newOutboundPage/data', id: 18035 },
      "POST /storage/template/submit": { path: 'post/storage/template/submit/data', id: 16975 },
      "POST /storage/template/remove": { path: 'post/storage/template/remove/data', id: 16969 },
      "GET /storage/template/init": { name: '仓费模板库', index: 0, list: [{"id":11213,"path":"page\\4pl\\expenseTemplate\\list"}] },
      "GET /storage/template/edit": { name: '编辑仓费模板', index: 0, list: [{"id":11214,"path":"page\\4pl\\expenseTemplate\\add"}] },
      "POST /storage/template/copy": { path: 'post/storage/template/copy/data', id: 16982 },
      "GET /storage/template/copy": { name: '复制仓费模板', index: 0, list: [{"id":11214,"path":"page\\4pl\\expenseTemplate\\add"}] },
      "GET /storage/template/add": { name: '新建仓费模板', index: 0, list: [{"id":11214,"path":"page\\4pl\\expenseTemplate\\add"}] },
      "GET /storage/expenseMng": { name: '仓费管理页', index: 0, list: [{"id":11211,"path":"page\\4pl\\expenseMng\\expenseMng"}] },
      "POST /storage/additionalFee/update": { path: 'post/storage/additionalFee/update/data', id: 17242 },
      "POST /storage/additionalFee/remove": { path: 'post/storage/additionalFee/remove/data', id: 17240 },
      "GET /storage/additionalFee/list": { path: 'get/storage/additionalFee/list/data', id: 17241 },
      "GET /storage/additionalFee/init": { name: '仓费附加费页面', index: 0, list: [{"id":11316,"path":"page\\4pl\\additionalFee\\list"}] },
      "POST /storage/additionalFee/add": { path: 'post/storage/additionalFee/add/data', id: 17239 },
      "POST /salesreport/skuprofits/exportDetail": { path: 'post/salesreport/skuprofits/exportDetail/data', id: 16686 },
      "GET /salesreport/multiOrderProfits/stat": { path: 'get/salesreport/multiOrderProfits/stat/data', id: 16687 },
      "GET /salesreport/multiOrderProfits/index": { path: 'get/salesreport/multiOrderProfits/index/data', id: 16659 },
      "POST /salesreport/multiOrderProfits/exportReport": { path: 'post/salesreport/multiOrderProfits/exportReport/data', id: 16688 },
      "POST /salesreport/multiOrderProfits/exportDetail": { path: 'post/salesreport/multiOrderProfits/exportDetail/data', id: 16689 },
      "GET /salesReport/multiSkuProfits/list": { name: '商品利润分析', index: 0, list: [{"id":11177,"path":"page\\pricemodel\\multiSkupPofits"}] },
      "GET /salesReport/multiSkuProfits/index": { path: 'get/salesReport/multiSkuProfits/index/data', id: 16679 },
      "POST /salesReport/multiSkuProfits/exportReport": { path: 'post/salesReport/multiSkuProfits/exportReport/data', id: 16685 },
      "GET /salesReport/multiOrderProfits/list": { name: '订单利润分析', index: 0, list: [{"id":11171,"path":"page\\pricemodel\\multiOrderProfits"}] },
      "POST /logis/warnSubscriber/remove": { path: 'post/logis/warnSubscriber/remove/data', id: 17258 },
      "POST /logis/warnSubscriber/list": { path: 'post/logis/warnSubscriber/list/data', id: 17259 },
      "GET /logis/warnSubscriber/init": { name: '物流预警订阅人', index: 0, list: [{"id":11320,"path":"page\\4pl\\logis\\warnSubscriber"}] },
      "POST /logis/warnSubscriber/add": { path: 'post/logis/warnSubscriber/add/data', id: 17257 },
      "POST /flow/shop/getShopSearchList": { path: 'post/flow/shop/getShopSearchList/data', id: 17635 },
      "POST /districtDelivery/getCategoryList": { path: 'post/districtDelivery/getCategoryList/data', id: 17054 },
      "POST /categoryAdviser/categoryOverview/transformOverview": { path: 'post/categoryAdviser/categoryOverview/transformOverview/data', id: 17939 },
      "GET /backend/upload/index": { name: '上传页面', index: 0, list: [{"id":11095,"path":"page\\system\\uploader\\index"}] },
      "POST /backend/upload": { path: 'post/backend/upload/data', id: 16000 },
      "POST /backend/test/list": { path: 'post/backend/test/list/data', id: 14690 },
      "GET /backend/test/demo1": { name: 'test', index: 0, list: [{"id":10845,"path":"page\\test\\index"}] },
      "GET /backend/test/demo": { name: 'test测试页面', index: 0, list: [{"id":11912,"path":"page\\test\\demo"}] },
      "POST /backend/system/notify/subscribe": { path: 'post/backend/system/notify/subscribe/data', id: 18024 },
      "POST /backend/system/notify/setSingleRead": { path: 'post/backend/system/notify/setSingleRead/data', id: 18181 },
      "POST /backend/system/notify/setAllRead": { path: 'post/backend/system/notify/setAllRead/data', id: 18023 },
      "GET /backend/system/notify/messages": { name: '个人工作台-消息中心', index: 0, list: [{"id":11514,"path":"page\\system\\notify\\list"}] },
      "GET /backend/system/notify/list": { path: 'get/backend/system/notify/list/data', id: 18022 },
      "POST /backend/system/notify/broadcastMsg": { path: 'post/backend/system/notify/broadcastMsg/data', id: 18475 },
      "POST /backend/supplychain/updateGoodSupplierMainSub": { path: 'post/backend/supplychain/updateGoodSupplierMainSub/data', id: 16253 },
      "GET /backend/supplychain/getSupplierDeltaAmount": { path: 'get/backend/supplychain/getSupplierDeltaAmount/data', id: 17069 },
      "POST /backend/supplierMainSubSet/updateBrandSupplier": { path: 'post/backend/supplierMainSubSet/updateBrandSupplier/data', id: 16221 },
      "POST /backend/supplierMainSubSet/getGoodsSupplierList": { path: 'post/backend/supplierMainSubSet/getGoodsSupplierList/data', id: 16241 },
      "GET /backend/supplierMainSubSet/getGoodsSupplierList": { name: '商品主从供应商设置', index: 0, list: [{"id":11116,"path":"page\\supplychain\\supplier\\goodSupplierMainSubSet"}] },
      "GET /backend/supplierMainSubSet/getGoodsSupplierList": { path: 'get/backend/supplierMainSubSet/getGoodsSupplierList/data', id: 16252 },
      "GET /backend/supplierMainSubSet/getCategoryList": { path: 'get/backend/supplierMainSubSet/getCategoryList/data', id: 16353 },
      "POST /backend/supplierMainSubSet/getCategoryList": { path: 'post/backend/supplierMainSubSet/getCategoryList/data', id: 16223 },
      "GET /backend/supplierMainSubSet/getBrandSupplierList": { path: 'get/backend/supplierMainSubSet/getBrandSupplierList/data', id: 16220 },
      "GET /backend/supplierMainSubSet/getBrandSupplierList": { name: '品牌主从供应商设置', index: 0, list: [{"id":11112,"path":"page\\supplychain\\supplier\\supplierMainSubSet"}] },
      "POST /backend/supplierMainSubSet/getBrandList": { path: 'post/backend/supplierMainSubSet/getBrandList/data', id: 16361 },
      "POST /backend/supplierMainSubSet/deleteBrandSupplier": { path: 'post/backend/supplierMainSubSet/deleteBrandSupplier/data', id: 16222 },
      "POST /backend/supplierMainSubSet/addBrandSupplier": { path: 'post/backend/supplierMainSubSet/addBrandSupplier/data', id: 16227 },
      "GET /backend/storage/warehouseConf": { name: '仓库配置', index: 0, list: [{"id":10815,"path":"page\\4pl\\warehouseConfig"}] },
      "POST /backend/storage/updateWarehouse": { path: 'post/backend/storage/updateWarehouse/data', id: 14579 },
      "POST /backend/storage/updateCustomesAgency": { path: 'post/backend/storage/updateCustomesAgency/data', id: 14597 },
      "POST /backend/storage/updateAddMark": { path: 'post/backend/storage/updateAddMark/data', id: 16963 },
      "GET /backend/storage/template/list": { path: 'get/backend/storage/template/list/data', id: 16961 },
      "POST /backend/storage/recompute": { path: 'post/backend/storage/recompute/data', id: 16964 },
      "GET /backend/storage/queryLocation": { path: 'get/backend/storage/queryLocation/data', id: 14573 },
      "POST /backend/storage/packageMaterial/update": { path: 'post/backend/storage/packageMaterial/update/data', id: 16973 },
      "POST /backend/storage/packageMaterial/remove": { path: 'post/backend/storage/packageMaterial/remove/data', id: 16972 },
      "GET /backend/storage/packageMaterial/manage": { name: '包材库', index: 0, list: [{"id":11212,"path":"page\\4pl\\packageMaterial\\manage"}] },
      "GET /backend/storage/packageMaterial/list": { path: 'get/backend/storage/packageMaterial/list/data', id: 16966 },
      "POST /backend/storage/packageMaterial/import": { path: 'post/backend/storage/packageMaterial/import/data', id: 16968 },
      "POST /backend/storage/modifyStorageFeeBid": { path: 'post/backend/storage/modifyStorageFeeBid/data', id: 16971 },
      "GET /backend/storage/list": { path: 'get/backend/storage/list/data', id: 14572 },
      "GET /backend/storage/getWarehouseRelateInfo": { path: 'get/backend/storage/getWarehouseRelateInfo/data', id: 14581 },
      "GET /backend/storage/getStorageFeeBid": { path: 'get/backend/storage/getStorageFeeBid/data', id: 16983 },
      "POST /backend/storage/deleteWarehouse": { path: 'post/backend/storage/deleteWarehouse/data', id: 14578 },
      "POST /backend/storage/deleteCustomesagency": { path: 'post/backend/storage/deleteCustomesagency/data', id: 14774 },
      "POST /backend/storage/delStorageFeeBid": { path: 'post/backend/storage/delStorageFeeBid/data', id: 16990 },
      "GET /backend/storage/customsAgencyConf": { name: '报关行', index: 0, list: [{"id":10824,"path":"page\\4pl\\customesBroker"}] },
      "GET /backend/storage/customesAgencylist": { path: 'get/backend/storage/customesAgencylist/data', id: 14593 },
      "POST /backend/storage/addWarehouse": { path: 'post/backend/storage/addWarehouse/data', id: 14577 },
      "POST /backend/storage/addStorageFeeBid": { path: 'post/backend/storage/addStorageFeeBid/data', id: 16962 },
      "POST /backend/storage/addCustomesAgency": { path: 'post/backend/storage/addCustomesAgency/data', id: 14582 },
      "POST /backend/specialAuditOrder/search": { path: 'post/backend/specialAuditOrder/search/data', id: 18129 },
      "GET /backend/specialAuditOrder/listPage": { name: '审批单特批统计页', index: 0, list: [{"id":11536,"path":"page\\capitalpool\\specialauditorderlist"}] },
      "POST /backend/specialAuditOrder/exportlist": { path: 'post/backend/specialAuditOrder/exportlist/data', id: 18131 },
      "POST /backend/outboundTask/search": { path: 'post/backend/outboundTask/search/data', id: 18033 },
      "GET /backend/outboundTask/list": { name: '出库单审核', index: 0, list: [{"id":11520,"path":"page\\warehouseout\\taskwarehouseoutList"}] },
      "GET /backend/outboundTask/list": { path: 'get/backend/outboundTask/list/data', id: 18027 },
      "GET /backend/outboundTask/export": { path: 'get/backend/outboundTask/export/data', id: 18036 },
      "GET /backend/notify/msg/query": { path: 'get/backend/notify/msg/query/data', id: 18018 },
      "GET /backend/newGoods/save": { path: 'get/backend/newGoods/save/data', id: 17076 },
      "GET /backend/myContractList/list": { path: 'get/backend/myContractList/list/data', id: 16746 },
      "GET /backend/myContractList/list": { name: '我的合同任务', index: 0, list: [{"id":11186,"path":"page\\supplychain\\contract\\myContractList"}] },
      "GET /backend/myContractList/getTransferingContracts": { path: 'get/backend/myContractList/getTransferingContracts/data', id: 16747 },
      "GET /backend/myContractList/getConfirmedContracts": { path: 'get/backend/myContractList/getConfirmedContracts/data', id: 16748 },
      "GET /backend/myContractList/getCompletedContracts": { path: 'get/backend/myContractList/getCompletedContracts/data', id: 16749 },
      "GET /backend/myContractList/batchExportContracts": { path: 'get/backend/myContractList/batchExportContracts/data', id: 16750 },
      "POST /backend/logis/updateLogisticsCompany": { path: 'post/backend/logis/updateLogisticsCompany/data', id: 14549 },
      "POST /backend/logis/updateLogisKind": { path: 'post/backend/logis/updateLogisKind/data', id: 14584 },
      "GET /backend/logis/queryLogisCompanyByStorage": { path: 'get/backend/logis/queryLogisCompanyByStorage/data', id: 14736 },
      "GET /backend/logis/queryLogisCompanies": { path: 'get/backend/logis/queryLogisCompanies/data', id: 14542 },
      "GET /backend/logis/queryAllLogisKinds": { path: 'get/backend/logis/queryAllLogisKinds/data', id: 14575 },
      "POST /backend/logis/queryAllLogisKind": { path: 'post/backend/logis/queryAllLogisKind/data', id: 14551 },
      "GET /backend/logis/kindIndex": { name: '物流公司类型管理页面', index: 0, list: [{"id":10816,"path":"page\\3pl\\logisticCompanyTypeManage"}] },
      "POST /backend/logis/getSlaveWarehouses": { path: 'post/backend/logis/getSlaveWarehouses/data', id: 14552 },
      "GET /backend/logis/getSlaveWarehouses": { path: 'get/backend/logis/getSlaveWarehouses/data', id: 14737 },
      "POST /backend/logis/deleteLogisticsCompany": { path: 'post/backend/logis/deleteLogisticsCompany/data', id: 14550 },
      "POST /backend/logis/deleteLogisKind": { path: 'post/backend/logis/deleteLogisKind/data', id: 14585 },
      "GET /backend/logis/companyIndex": { name: '物流公司管理页面', index: 0, list: [{"id":10808,"path":"page\\3pl\\logisticCompanyManage"}] },
      "POST /backend/logis/addLogisticsCompany": { path: 'post/backend/logis/addLogisticsCompany/data', id: 14548 },
      "POST /backend/logis/addLogisKind": { path: 'post/backend/logis/addLogisKind/data', id: 14583 },
      "GET /backend/linkto": { name: '链接其他系统iframe页面', index: 0, list: [{"id":11161,"path":"page\\iframe"}] },
      "GET /backend/index": { name: '个人工作台首页', index: 0, list: [{"id":11513,"path":"page\\index"}] },
      "POST /backend/homepage/tasks/update": { path: 'post/backend/homepage/tasks/update/data', id: 18021 },
      "POST /backend/homepage/quickentries/update": { path: 'post/backend/homepage/quickentries/update/data', id: 18008 },
      "POST /backend/homepage/quickentries/getquickentries": { path: 'post/backend/homepage/quickentries/getquickentries/data', id: 18103 },
      "POST /backend/homepage/getpendingtaskList": { path: 'post/backend/homepage/getpendingtaskList/data', id: 18104 },
      "POST /backend/homepage/entry/remove": { path: 'post/backend/homepage/entry/remove/data', id: 18017 },
      "DELETE /backend/homepage/entry/add": { path: 'delete/backend/homepage/entry/add/data', id: 18016 },
      "GET /backend/homepage/config/meta": { name: '首页设置页管理员设置', index: 0, list: [{"id":11512,"path":"page\\homepage\\config\\meta"}] },
      "GET /backend/homepage/config": { name: '首页设置页编辑', index: 0, list: [{"id":11509,"path":"page\\homepage\\config\\config"}] },
      "GET /backend/goodstransfer/taskSearch": { path: 'get/backend/goodstransfer/taskSearch/data', id: 15463 },
      "GET /backend/goodstransfer/taskListPage": { name: '转仓单-审批任务-列表页', index: 0, list: [{"id":10986,"path":"page\\goodstransfer\\taskList"}] },
      "GET /backend/goodstransfer/searchGoods": { path: 'get/backend/goodstransfer/searchGoods/data', id: 15222 },
      "GET /backend/goodstransfer/search": { path: 'get/backend/goodstransfer/search/data', id: 15136 },
      "POST /backend/goodstransfer/save": { path: 'post/backend/goodstransfer/save/data', id: 15140 },
      "GET /backend/goodstransfer/rejectAudit": { path: 'get/backend/goodstransfer/rejectAudit/data', id: 15315 },
      "GET /backend/goodstransfer/passAudit": { path: 'get/backend/goodstransfer/passAudit/data', id: 15314 },
      "GET /backend/goodstransfer/newGoodsTransfer": { name: '新建转仓单', index: 0, list: [{"id":10917,"path":"page\\goodstransfer\\goodsTransferOrder"}] },
      "GET /backend/goodstransfer/listPage": { name: '转仓单管理', index: 0, list: [{"id":10916,"path":"page\\goodstransfer\\goodsTransferList"}] },
      "POST /backend/goodstransfer/importGoods": { path: 'post/backend/goodstransfer/importGoods/data', id: 15224 },
      "GET /backend/goodstransfer/feeEnter": { path: 'get/backend/goodstransfer/feeEnter/data', id: 15319 },
      "GET /backend/goodstransfer/detailPage": { name: '转仓单详情页面', index: 0, list: [{"id":10917,"path":"page\\goodstransfer\\goodsTransferOrder"}] },
      "GET /backend/goodstransfer/delete": { path: 'get/backend/goodstransfer/delete/data', id: 15138 },
      "GET /backend/goodstransfer/confirmStockOut": { path: 'get/backend/goodstransfer/confirmStockOut/data', id: 15681 },
      "GET /backend/goodstransfer/confirmStockIn": { path: 'get/backend/goodstransfer/confirmStockIn/data', id: 15682 },
      "POST /backend/goodstransfer/commit": { path: 'post/backend/goodstransfer/commit/data', id: 15141 },
      "GET /backend/goodstransfer/cancelAudit": { path: 'get/backend/goodstransfer/cancelAudit/data', id: 15316 },
      "POST /backend/goodslife/reject": { path: 'post/backend/goodslife/reject/data', id: 17120 },
      "GET /backend/goodslife/pending/list": { path: 'get/backend/goodslife/pending/list/data', id: 17118 },
      "GET /backend/goodslife/manage/list": { path: 'get/backend/goodslife/manage/list/data', id: 17096 },
      "GET /backend/goodslife/manage": { name: '商品状态管理列表', index: 0, list: [{"id":11230,"path":"page\\goodslife\\statusMngList"}] },
      "GET /backend/goodslife/import": { path: 'get/backend/goodslife/import/data', id: 17101 },
      "GET /backend/goodslife/export": { path: 'get/backend/goodslife/export/data', id: 17100 },
      "POST /backend/goodslife/audit": { path: 'post/backend/goodslife/audit/data', id: 17119 },
      "POST /backend/goodslife/askforAudit": { path: 'post/backend/goodslife/askforAudit/data', id: 17099 },
      "GET /backend/goodlife/newgood": { path: 'get/backend/goodlife/newgood/data', id: 17098 },
      "POST /backend/express/removeExpressTemplate": { path: 'post/backend/express/removeExpressTemplate/data', id: 16994 },
      "POST /backend/express/recount": { path: 'post/backend/express/recount/data', id: 17000 },
      "POST /backend/express/preRemoveExpressTemplate": { path: 'post/backend/express/preRemoveExpressTemplate/data', id: 17521 },
      "GET /backend/express/listExpressTemplate": { path: 'get/backend/express/listExpressTemplate/data', id: 16991 },
      "GET /backend/express/list": { name: '运费模板列表', index: 0, list: [{"id":11217,"path":"page\\3pl\\express\\list"}] },
      "GET /backend/express/index": { name: '物流运费管理', index: 0, list: [{"id":11218,"path":"page\\3pl\\express\\index"}] },
      "GET /backend/express/getLogisticsCompany": { path: 'get/backend/express/getLogisticsCompany/data', id: 16995 },
      "POST /backend/express/getExpressList": { path: 'post/backend/express/getExpressList/data', id: 16996 },
      "POST /backend/express/expressAddInfo": { path: 'post/backend/express/expressAddInfo/data', id: 17196 },
      "POST /backend/express/editExpressBid": { path: 'post/backend/express/editExpressBid/data', id: 16998 },
      "GET /backend/express/edit": { name: '编辑运费模板', index: 0, list: [{"id":11216,"path":"page\\3pl\\express\\create"}] },
      "POST /backend/express/deleteExpressBid": { path: 'post/backend/express/deleteExpressBid/data', id: 17052 },
      "GET /backend/express/create": { name: '新建运费模板', index: 0, list: [{"id":11216,"path":"page\\3pl\\express\\create"}] },
      "POST /backend/express/copyExpressTemplate": { path: 'post/backend/express/copyExpressTemplate/data', id: 17002 },
      "POST /backend/express/changeType": { path: 'post/backend/express/changeType/data', id: 17001 },
      "POST /backend/express/addFeeBid": { path: 'post/backend/express/addFeeBid/data', id: 16999 },
      "GET /backend/dw/export/auditStatistics/totalAmount": { path: 'get/backend/dw/export/auditStatistics/totalAmount/data', id: 17667 },
      "GET /backend/dw/export/auditStatistics/list": { path: 'get/backend/dw/export/auditStatistics/list/data', id: 17652 },
      "GET /backend/dw/export/auditStatistics/export": { path: 'get/backend/dw/export/auditStatistics/export/data', id: 17662 },
      "GET /backend/dw/export/auditStatistics": { name: '审批单数据统计', index: 0, list: [{"id":11461,"path":"page\\dw\\auditStatistics"}] },
      "POST /backend/dlcenter/upload": { path: 'post/backend/dlcenter/upload/data', id: 18950 },
      "GET /backend/dlcenter/list": { path: 'get/backend/dlcenter/list/data', id: 18949 },
      "GET /backend/dlcenter/index": { name: '下载中心', index: 0, list: [{"id":11721,"path":"page\\dlcenter\\index"}] },
      "POST /backend/dlcenter/delete": { path: 'post/backend/dlcenter/delete/data', id: 18948 },
      "POST /backend/districtDelivery/updateDistrictScheme": { path: 'post/backend/districtDelivery/updateDistrictScheme/data', id: 14721 },
      "GET /backend/districtDelivery/updateDefaultLogistic": { path: 'get/backend/districtDelivery/updateDefaultLogistic/data', id: 14738 },
      "POST /backend/districtDelivery/saveGoodsSchemeSort": { path: 'post/backend/districtDelivery/saveGoodsSchemeSort/data', id: 14709 },
      "POST /backend/districtDelivery/queryOperationLog": { path: 'post/backend/districtDelivery/queryOperationLog/data', id: 14866 },
      "GET /backend/districtDelivery/queryGoodsdistribution": { path: 'get/backend/districtDelivery/queryGoodsdistribution/data', id: 14624 },
      "GET /backend/districtDelivery/queryDistrictScheme": { path: 'get/backend/districtDelivery/queryDistrictScheme/data', id: 14715 },
      "GET /backend/districtDelivery/queryDefaultLogistic": { path: 'get/backend/districtDelivery/queryDefaultLogistic/data', id: 14637 },
      "GET /backend/districtDelivery/queryDefaultLogis": { path: 'get/backend/districtDelivery/queryDefaultLogis/data', id: 14729 },
      "POST /backend/districtDelivery/queryAreaDetailByDistrictIds": { path: 'post/backend/districtDelivery/queryAreaDetailByDistrictIds/data', id: 14854 },
      "GET /backend/districtDelivery/importDistrictSchemeTemplate": { path: 'get/backend/districtDelivery/importDistrictSchemeTemplate/data', id: 14735 },
      "POST /backend/districtDelivery/importDistrictScheme": { path: 'post/backend/districtDelivery/importDistrictScheme/data', id: 14724 },
      "GET /backend/districtDelivery/getGoodsSchemeDetail": { path: 'get/backend/districtDelivery/getGoodsSchemeDetail/data', id: 14651 },
      "GET /backend/districtDelivery/getGoodsList": { path: 'get/backend/districtDelivery/getGoodsList/data', id: 14665 },
      "GET /backend/districtDelivery/getCategoryList": { path: 'get/backend/districtDelivery/getCategoryList/data', id: 14657 },
      "POST /backend/districtDelivery/getAreaBeginWithRegion": { path: 'post/backend/districtDelivery/getAreaBeginWithRegion/data', id: 14814 },
      "POST /backend/districtDelivery/getAreaBeginWithRegion": { path: 'post/backend/districtDelivery/getAreaBeginWithRegion/data', id: 17055 },
      "GET /backend/districtDelivery/getAreaBeginWithProvince": { path: 'get/backend/districtDelivery/getAreaBeginWithProvince/data', id: 14727 },
      "GET /backend/districtDelivery/getAreaBeginWithCountry": { path: 'get/backend/districtDelivery/getAreaBeginWithCountry/data', id: 14728 },
      "GET /backend/districtDelivery/exportDistrictScheme": { path: 'get/backend/districtDelivery/exportDistrictScheme/data', id: 14726 },
      "GET /backend/districtDelivery/downloadGoodsTable": { path: 'get/backend/districtDelivery/downloadGoodsTable/data', id: 14696 },
      "GET /backend/districtDelivery/distributionScheme": { name: '配送方案', index: 0, list: [{"id":10826,"path":"page\\3pl\\distributionScheme"}] },
      "GET /backend/districtDelivery/deleteGoodsScheme": { path: 'get/backend/districtDelivery/deleteGoodsScheme/data', id: 14695 },
      "GET /backend/districtDelivery/deleteDistrictScheme": { path: 'get/backend/districtDelivery/deleteDistrictScheme/data', id: 14722 },
      "GET /backend/districtDelivery/addLocationImportTemplate": { path: 'get/backend/districtDelivery/addLocationImportTemplate/data', id: 14655 },
      "GET /backend/districtDelivery/addLocationImport": { path: 'get/backend/districtDelivery/addLocationImport/data', id: 14672 },
      "GET /backend/districtDelivery/addGoodsScheme": { name: '新建指定商品配送方案', index: 0, list: [{"id":10837,"path":"page\\3pl\\addGoodsScheme"}] },
      "GET /backend/districtDelivery/addGoodsImportTemplate": { path: 'get/backend/districtDelivery/addGoodsImportTemplate/data', id: 14654 },
      "GET /backend/districtDelivery/addGoodsImport": { path: 'get/backend/districtDelivery/addGoodsImport/data', id: 14670 },
      "POST /backend/districtDelivery/addDistrictScheme": { path: 'post/backend/districtDelivery/addDistrictScheme/data', id: 14720 },
      "POST /backend/districtDelivery/addCategoryGoodsScheme": { path: 'post/backend/districtDelivery/addCategoryGoodsScheme/data', id: 14691 },
      "POST /backend/contractTask/reject": { path: 'post/backend/contractTask/reject/data', id: 16761 },
      "POST /backend/contractTask/pass": { path: 'post/backend/contractTask/pass/data', id: 16760 },
      "GET /backend/contractTask/list": { path: 'get/backend/contractTask/list/data', id: 16753 },
      "GET /backend/contractTask/list": { name: '合同审批任务', index: 0, list: [{"id":11184,"path":"page\\supplychain\\contract\\contractTaskList"}] },
      "GET /backend/contractTask/getPendingContracts": { path: 'get/backend/contractTask/getPendingContracts/data', id: 16754 },
      "GET /backend/contractTask/getApprovedContracts": { path: 'get/backend/contractTask/getApprovedContracts/data', id: 16755 },
      "POST /backend/contractTask/complete": { path: 'post/backend/contractTask/complete/data', id: 17061 },
      "POST /backend/contractTask/callback": { path: 'post/backend/contractTask/callback/data', id: 17097 },
      "GET /backend/contractTask/batchExportContracts": { path: 'get/backend/contractTask/batchExportContracts/data', id: 16764 },
      "GET /backend/contractMng/task/list": { path: 'get/backend/contractMng/task/list/data', id: 16751 },
      "GET /backend/contractMng/task/list": { name: '合同管理', index: 0, list: [{"id":11185,"path":"page\\supplychain\\contract\\contractMngList"}] },
      "GET /backend/contractMng/task/getAllContracts": { path: 'get/backend/contractMng/task/getAllContracts/data', id: 16752 },
      "GET /backend/contractMng/task/batchExportContracts": { path: 'get/backend/contractMng/task/batchExportContracts/data', id: 16766 },
      "GET /backend/contractDetail/uploadAttachment": { path: 'get/backend/contractDetail/uploadAttachment/data', id: 17057 },
      "POST /backend/contractDetail/submit": { path: 'post/backend/contractDetail/submit/data', id: 16758 },
      "POST /backend/contractDetail/save": { path: 'post/backend/contractDetail/save/data', id: 16757 },
      "GET /backend/contractDetail/preview": { path: 'get/backend/contractDetail/preview/data', id: 16762 },
      "POST /backend/contractDetail/new": { path: 'post/backend/contractDetail/new/data', id: 16883 },
      "GET /backend/contractDetail/download": { path: 'get/backend/contractDetail/download/data', id: 17137 },
      "GET /backend/contractDetail/detailPDF": { name: '合同详情', index: 0, list: [{"id":11449,"path":"page\\contractDetail\\detailPDF"}] },
      "POST /backend/contractDetail/detail": { path: 'post/backend/contractDetail/detail/data', id: 16745 },
      "GET /backend/contractDetail/detail": { name: '合同详情页', index: 0, list: [{"id":11183,"path":"page\\supplychain\\contract\\contractDetail"}] },
      "GET /backend/contractDetail/deleteAttachment": { path: 'get/backend/contractDetail/deleteAttachment/data', id: 17060 },
      "DELETE /backend/contractDetail/delete": { path: 'delete/backend/contractDetail/delete/data', id: 16759 },
      "GET /backend/contractDetail/create": { name: '新建合同', index: 0, list: [{"id":11183,"path":"page\\supplychain\\contract\\contractDetail"}] },
      "POST /backend/category/brands": { path: 'post/backend/category/brands/data', id: 16228 },
      "POST /backend/capitalpool/search": { path: 'post/backend/capitalpool/search/data', id: 17894 },
      "POST /backend/capitalpool/saveCustomCategory": { path: 'post/backend/capitalpool/saveCustomCategory/data', id: 17981 },
      "GET /backend/capitalpool/listPage": { name: '资金池列表页', index: 0, list: [{"id":11495,"path":"page\\capitalpool\\capitalpoollist"}] },
      "GET /backend/capitalpool/getCategoriesTree": { path: 'get/backend/capitalpool/getCategoriesTree/data', id: 17992 },
      "POST /backend/capitalpool/exportlist": { path: 'post/backend/capitalpool/exportlist/data', id: 17896 },
      "POST /backend/capitalpool/exportdetailPage": { path: 'post/backend/capitalpool/exportdetailPage/data', id: 17983 },
      "POST /backend/capitalpool/editCycleInventoryDay": { path: 'post/backend/capitalpool/editCycleInventoryDay/data', id: 18037 },
      "GET /backend/capitalpool/detailPage": { name: '资金池详情页', index: 0, list: [{"id":11496,"path":"page\\capitalpool\\customcategorydetail"}] },
      "POST /backend/capitalpool/deleteCustomCategory": { path: 'post/backend/capitalpool/deleteCustomCategory/data', id: 18005 },
      "POST /backend/candidateSku/searchAuditing": { path: 'post/backend/candidateSku/searchAuditing/data', id: 20122 },
      "POST /backend/candidateSku/searchAudited": { path: 'post/backend/candidateSku/searchAudited/data', id: 20125 },
      "GET /backend/candidateSku/manage": { name: '新品提报任务页面', index: 0, list: [{"id":11899,"path":"page\\report\\index"}] },
      "GET /backend/candidateSku/fetchAuditingCandidateSku": { name: '新品详情页', index: 0, list: [{"id":11900,"path":"page\\report\\detail"}] },
      "GET /backend/candidateSku/fetchAuditedCandidateSku": { name: '详情页面', index: 0, list: [{"id":11900,"path":"page\\report\\detail"}] },
      "GET /backend/candidateSku/audit": { path: 'get/backend/candidateSku/audit/data', id: 20123 },
      "GET /backend/brandTask/search": { path: 'get/backend/brandTask/search/data', id: 20115 },
      "POST /backend/brandTask/relate": { path: 'post/backend/brandTask/relate/data', id: 20119 },
      "POST /backend/brandTask/process": { path: 'post/backend/brandTask/process/data', id: 20118 },
      "POST /backend/brandTask/msBrand": { path: 'post/backend/brandTask/msBrand/data', id: 20132 },
      "POST /backend/brandTask/list": { path: 'post/backend/brandTask/list/data', id: 20120 },
      "GET /backend/brandTask/index": { name: '品牌新增任务', index: 0, list: [{"id":11898,"path":"page\\brandTask\\index"}] },
      "POST /backend/brandTask/export": { path: 'post/backend/brandTask/export/data', id: 20116 },
      "POST /backend/brandTask/detail": { path: 'post/backend/brandTask/detail/data', id: 20121 },
      "GET /backend/brandTask/detail": { name: '品牌新增详情页面', index: 0, list: [{"id":11927,"path":"page\\brandTask\\detail"}] },
      "POST /backend/brandTask/checkAssociatedSkuExist": { path: 'post/backend/brandTask/checkAssociatedSkuExist/data', id: 20117 },
      "POST /backend/backendSkuRecord/list": { path: 'post/backend/backendSkuRecord/list/data', id: 20091 },
      "GET /backend/backendSkuRecord/index": { name: '商品资料更新任务', index: 0, list: [{"id":11896,"path":"page\\goodslife\\infoMngList"}] },
      "POST /backend/backendSkuRecord/export": { path: 'post/backend/backendSkuRecord/export/data', id: 20092 },
      "POST /backend/auditDetail/supplierConfirm": { path: 'post/backend/auditDetail/supplierConfirm/data', id: 16816 },
      "POST /backend/account/balance/update": { path: 'post/backend/account/balance/update/data', id: 16284 },
      "POST /backend/account/balance/list": { path: 'post/backend/account/balance/list/data', id: 16283 },
      "GET /backend/account/balance/init": { name: '余额预警页面', index: 0, list: [{"id":11121,"path":"page\\accountWarning\\ini"}] },
      "POST /backend/account/balance/delete": { path: 'post/backend/account/balance/delete/data', id: 16279 },
      "POST /backend/account/balance/addSubscriberEmail": { path: 'post/backend/account/balance/addSubscriberEmail/data', id: 16281 },
      "POST /backend/account/balance/add": { path: 'post/backend/account/balance/add/data', id: 16278 },
      "POST /backend/HSWhiteList/update": { path: 'post/backend/HSWhiteList/update/data', id: 16229 },
      "GET /backend/HSWhiteList/list": { path: 'get/backend/HSWhiteList/list/data', id: 16224 },
      "GET /backend/HSWhiteList/index": { name: 'HS白名单', index: 0, list: [{"id":11113,"path":"page\\supplymanage\\whitelist"}] },
      "POST /backend/HSWhiteList/import": { path: 'post/backend/HSWhiteList/import/data', id: 16225 },
      "POST /backend/HSWhiteList/delete": { path: 'post/backend/HSWhiteList/delete/data', id: 16226 },
      "POST /backend/HSWhiteList/add": { path: 'post/backend/HSWhiteList/add/data', id: 16372 },
      "GET /": { path: 'get/data', id: 20131 },
    },
    /* 是否自动打开浏览器 */
    launch: true,
    /* 端口 */
    port: 8002,
    /* 同步模块mock数据路径 */
    mockTpl: 'C:/Users/hzxujunyu/Desktop/memory/fxm/foxman/example/src/main/webapp/backend/template/mock/',
    /* 异步接口mock数据路径 */
    mockApi: 'C:/Users/hzxujunyu/Desktop/memory/fxm/foxman/example/src/main/webapp/backend/src/mock/',
    /* 模板后缀 */
    viewExt: '.ftl',
    /* 模板引擎 */
    engine: 'freemarker'
};
import { Key, ReactNode, useCallback, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import DataTable from "@/components/ui/DataTable";
import InputFile from "@/components/ui/InputFile";
import AddCategoryModal from "./AddCategoryModal";
import { COLUMN_LISTS_CATEGORY } from "./Category.constants";
import useCategory from "./useCategory";

const Category = () => {
  const router = useRouter();
  const {
    setUrl,
    currentPage,
    currentLimit,
    currentSearch,
    handleChangeLimit,
    handleChangePage,
    handleSearch,
    handleClearSearch,
    dataCategory,
    isLoadingCategory,
    isRefetchingCategory,
    refetchCategory,
  } = useCategory();

  const addCategoryModal = useDisclosure();

  useEffect(() => {
    if (router.isReady) {
      setUrl();
    }
  }, [router.isReady]);
  const renderCell = useCallback(
    (category: Record<string, unknown>, columnKey: Key) => {
      const cellValue = category[columnKey as keyof typeof category];
      switch (columnKey) {
        // case "icon":
        //   return (
        //     <Image src={`${cellValue}`} alt="icon" width={100} height={200} />
        //   );
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <CiMenuKebab className="text-default-700" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="detail-category-button"
                  onPress={() => router.push(`/admin/category/${category._id}`)}
                >
                  Detail Category
                </DropdownItem>
                <DropdownItem
                  key="delete-category-button"
                  className="text-danger-500"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [router.push],
  );
  return (
    <section>
      {Object.keys(router.query).length > 0 && (
        <DataTable
          buttonTopContentLabel="Create Category"
          columns={COLUMN_LISTS_CATEGORY}
          currentPage={Number(currentPage)}
          renderCell={renderCell}
          limit={String(currentLimit)}
          emptyContent="Category is empty"
          isLoading={isLoadingCategory || isRefetchingCategory}
          data={dataCategory?.data || []}
          onChangeLimit={handleChangeLimit}
          onChangePage={handleChangePage}
          onChangeSearch={handleSearch}
          onClearSearch={handleClearSearch}
          onClickButtonTopContent={addCategoryModal.onOpen}
          totalPages={dataCategory?.pagination.totalPages}
        />
      )}
      <AddCategoryModal
        refetchCategory={refetchCategory}
        {...addCategoryModal}
      />
      <InputFile name="dropzone" isDropable />
    </section>
  );
};

export default Category;

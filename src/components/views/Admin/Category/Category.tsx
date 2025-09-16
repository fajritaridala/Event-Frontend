import DataTable from "@/components/ui/DataTable";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { COLUMN_LISTS_CATEGORY } from "./Category.constants";
import { LIMIT_LISTS } from "@/constants/list.contants";

const Category = () => {
  const router = useRouter();
  const renderCell = useCallback(
    (category: Record<string, unknown>, columnKey: Key) => {
      const cellValue = category[columnKey as keyof typeof category];
      switch (columnKey) {
        case "icon":
          return (
            <Image src={`${cellValue}`} alt="icon" width={100} height={200} />
          );
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
      <DataTable
        buttonTopContentLabel="Create Category"
        columns={COLUMN_LISTS_CATEGORY}
        currentPage={1}
        renderCell={renderCell}
        limit={LIMIT_LISTS[0].label}
        emptyContent="Category is empty"
        data={[
          {
            _id: "123",
            name: "Category 1",
            description: "This is category 1",
            icon: "/images/general/logo.svg",
          },
        ]}
        onChangeLimit={() => {}}
        onChangePage={() => {}}
        onChangeSearch={() => {}}
        onClearSearch={() => {}}
        onClickButtonTopContent={() => {}}
        totalPages={2}
      />
    </section>
  );
};

export default Category;
